import type { PrismaClient } from '@prisma/client';
import { mockDeep } from 'jest-mock-extended';
import type { DeepMockProxy } from 'jest-mock-extended';

export type Context = {
  prisma: PrismaClient;
};

export type MockContext = {
  prisma: DeepMockProxy<PrismaClient>;
};

// For testing
export function createMockContext(): MockContext {
  return {
    prisma: mockDeep<PrismaClient>(),
  };
}
