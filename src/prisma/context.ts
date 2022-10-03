import type { PrismaClient } from '@prisma/client';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';

export type Context = {
  prisma: PrismaClient;
};

export type MockContext = {
  prisma: DeepMockProxy<PrismaClient>;
};

export function createMockContext(): MockContext {
  return {
    prisma: mockDeep<PrismaClient>(),
  };
}
