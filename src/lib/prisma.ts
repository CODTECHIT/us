import { PrismaClient } from '../../prisma/generated/client/client'
import { PrismaMariaDb } from '@prisma/adapter-mariadb'

// Bumping to force module reload - 2026-05-02

const prismaClientSingleton = () => {
  const databaseUrl = process.env.DATABASE_URL;
  
  if (!databaseUrl) {
    // During build time (e.g. on Hostinger), DATABASE_URL is not available.
    // Return a Prisma Client with a dummy adapter so the build compiles successfully.
    const dummyAdapter = new PrismaMariaDb({
      host: '127.0.0.1',
      port: 3306,
      user: 'dummy_user',
      password: 'dummy_password',
      database: 'dummy_db',
      connectionLimit: 1
    })
    return new PrismaClient({ adapter: dummyAdapter })
  }

  try {
    const url = new URL(databaseUrl)
    const adapter = new PrismaMariaDb({
      host: url.hostname,
      port: parseInt(url.port) || 3306,
      user: decodeURIComponent(url.username),
      password: decodeURIComponent(url.password),
      database: url.pathname.substring(1),
      connectionLimit: 3, // Limit connections to prevent exceeding Hostinger hourly limits
    })

    return new PrismaClient({ adapter })
  } catch (error) {
    console.warn("Failed to parse DATABASE_URL, using dummy adapter for fallback:", error)
    const dummyAdapter = new PrismaMariaDb({
      host: '127.0.0.1',
      port: 3306,
      user: 'dummy_user',
      password: 'dummy_password',
      database: 'dummy_db',
      connectionLimit: 1
    })
    return new PrismaClient({ adapter: dummyAdapter })
  }
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma
