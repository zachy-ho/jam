import { seedJams, seedUsers } from '../seed';
import { createMockContext } from '../context';

describe('prisma', () => {
  const { prisma } = createMockContext();
  describe('seedUsers', () => {
    it('drops all entries in the Users table before recreating new users', async () => {
      await seedUsers(prisma, 1);
      expect(prisma.user.deleteMany.mock.invocationCallOrder[0]).toBeLessThan(prisma.user.create.mock.invocationCallOrder[0]);
      expect(prisma.user.deleteMany).toHaveBeenCalledWith({});
    });

    it('creates the right number of users', async () => {
      await seedUsers(prisma, 3);
      expect(prisma.user.deleteMany.mock.invocationCallOrder[0]).toBeLessThan(prisma.user.create.mock.invocationCallOrder[0]);
      expect(prisma.user.deleteMany).toHaveBeenCalledWith({});
    });
  });

  // describe('seedJams', () => {
    // it('seeds the jams table with the right number of jams', () => {
      // seedJams(prisma, 4);
      // expect(prisma.user.deleteMany()).toBe()
    // });

    // it('seeds the jams table with the right number of sessions specified for each jam', () => {
      // seedUsers(prisma, 2);
      // expect(prisma.user.deleteMany()).toBe()
    // });
  // });
});
