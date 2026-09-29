import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { __scPrisma?: PrismaClient };

export const prisma = globalForPrisma.__scPrisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.__scPrisma = prisma;
