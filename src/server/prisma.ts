import { PrismaClient } from '@prisma/client';
import { env } from './environment';

// https://www.prisma.io/docs/guides/database/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices
declare global {
  // eslint-disable-next-line vars-on-top, no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma || new PrismaClient();

if (env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}
