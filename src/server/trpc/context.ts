import { CreateNextContextOptions } from '@trpc/server/adapters/next';
import type { inferAsyncReturnType } from '@trpc/server';
import { prisma } from 'server/prisma';

export async function createContext(_opts: CreateNextContextOptions) {
  return {
    prisma
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;
