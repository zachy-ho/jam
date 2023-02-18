import { mockReset } from 'jest-mock-extended';
import { seedUsers, seedJamsBase } from '../seeders';
import { createMockContext } from '../context';

describe('prisma seed', () => {
  const { prisma } = createMockContext();
  beforeEach(() => {
    mockReset(prisma);
  });

  describe('seedUsers', () => {
    it('drops all entries in the Users table before recreating new users', async () => {
      await seedUsers(prisma);
      expect(prisma.user.deleteMany.mock.invocationCallOrder[0]).toBeLessThan(
        prisma.user.createMany.mock.invocationCallOrder[0]
      );
      expect(prisma.user.deleteMany).toHaveBeenCalledWith({});
    });
  });

  describe('seedJamsBase', () => {
    it('drops all entries in the Jams table before recreating new jams', async () => {
      await seedJamsBase(prisma);
      expect(prisma.jam.deleteMany.mock.invocationCallOrder[0]).toBeLessThan(
        prisma.jam.createMany.mock.invocationCallOrder[0]
      );
      expect(prisma.jam.deleteMany).toHaveBeenCalledWith({});
    });
  });
});
