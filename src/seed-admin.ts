import { PrismaClient } from '../prisma/generated/client/client'
import { PrismaMariaDb } from '@prisma/adapter-mariadb'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
import { parseDatabaseUrl } from './lib/db-parser'

dotenv.config()

const createAdmin = async () => {
  const databaseUrl = process.env.DATABASE_URL
  if (!databaseUrl) throw new Error('DATABASE_URL not found')

  const { host, port, user, password, database } = parseDatabaseUrl(databaseUrl)
  const adapter = new PrismaMariaDb({
    host,
    port,
    user,
    password,
    database,
  })

  const prisma = new PrismaClient({ adapter })

  const email = process.env.ADMIN_EMAIL
  const password = process.env.ADMIN_PASSWORD
  
  if (!email || !password) {
    throw new Error('ADMIN_EMAIL or ADMIN_PASSWORD not found in environment variables')
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  try {
    const user = await prisma.user.upsert({
      where: { email },
      update: {
        password: hashedPassword,
        role: 'SUPERADMIN'
      },
      create: {
        email,
        password: hashedPassword,
        name: 'Main Admin',
        role: 'SUPERADMIN'
      }
    })
    console.log('✅ Admin user created successfully:', user.email)
  } catch (error) {
    console.error('❌ Error creating admin user:', error)
  } finally {
    await prisma.$disconnect()
  }
}

createAdmin()
