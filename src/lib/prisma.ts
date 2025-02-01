import { PrismaClient } from "@prisma/client";

// ✅ Garantindo que Prisma seja inicializado apenas uma vez
const globalForPrisma = global as unknown as { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma; // ✅ Agora também exportamos como default
