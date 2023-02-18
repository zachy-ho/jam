import { seedUsers } from '../seeders';
import { createMockContext } from '../context';

describe('prisma seed', () => {
  const { prisma } = createMockContext();
  describe('seedUsers', () => {
    it('drops all entries in the Users table before recreating new users', async () => {
      await seedUsers(prisma, 1);
      expect(prisma.user.deleteMany.mock.invocationCallOrder[0]).toBeLessThan(
        prisma.user.create.mock.invocationCallOrder[0]
      );
      expect(prisma.user.deleteMany).toHaveBeenCalledWith({});
    });

    it('creates the right number of users', async () => {
      const mockUsers = await seedUsers(prisma, 3);
      expect(mockUsers).toHaveLength(3);
    });
  });
});
