import { CreateNextContextOptions } from '@trpc/server/adapters/next';
import type { inferAsyncReturnType } from '@trpc/server';
import { prisma } from 'server/prisma';
import { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';

export async function createNextContext(_opts: CreateNextContextOptions) {
  return {
    prisma
  };
}

export async function createContext({ req, resHeaders }: FetchCreateContextFnOptions) {
  return { req, resHeaders, prisma };
}

export type Context = inferAsyncReturnType<typeof createContext>;
