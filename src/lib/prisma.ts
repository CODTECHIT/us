import { PrismaClient } from '../../prisma/generated/client/client'
import { PrismaMariaDb } from '@prisma/adapter-mariadb'

// Bumping to force module reload - 2026-05-02

const prismaClientSingleton = () => {
  const databaseUrl = process.env.DATABASE_URL;
  
  if (!databaseUrl) {
    return new PrismaClient({ 
      // @ts-ignore
      adapter: null 
    })
  }

  try {
    const url = new URL(databaseUrl)
    const adapter = new PrismaMariaDb({
      host: url.hostname,
      port: parseInt(url.port) || 3306,
      user: decodeURIComponent(url.username),
      password: decodeURIComponent(url.password),
      database: url.pathname.substring(1),
    })

    return new PrismaClient({ adapter })
  } catch (error) {
    console.warn("Failed to parse DATABASE_URL, using default constructor placeholder")
    return new PrismaClient({ 
      // @ts-ignore
      adapter: null 
    })
  }
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma
