import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"], // Log para desenvolvimento
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
