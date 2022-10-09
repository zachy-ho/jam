import { maybeGenerateSessionCreation, seedJams, seedUsers } from '../seeders';
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

  describe('seedJams', () => {
    it('drops all entries in the Session table before deleting any jams', async () => {
      await seedJams(prisma, { jamsCount: 1, sessionsPerJam: 'random' });
      expect(prisma.session.deleteMany.mock.invocationCallOrder[0]).toBeLessThan(
        prisma.jam.deleteMany.mock.invocationCallOrder[0]
      );
    });

    it('drops all entries in the Jam table before recreating new jams', async () => {
      await seedJams(prisma, { jamsCount: 1, sessionsPerJam: 'random' });
      expect(prisma.jam.deleteMany.mock.invocationCallOrder[0]).toBeLessThan(
        prisma.jam.create.mock.invocationCallOrder[0]
      );
    });

    it('seeds the jam table with the right number of sessions specified for each jam', async () => {
      const mockJams = await seedJams(prisma, {
        jamsCount: 2,
        sessionsPerJam: 3,
      });
      expect(mockJams).toHaveLength(2);
    });
  });

  describe('maybeGenerateSessionCreation', () => {
    it('returns undefined if sessionsCount is 0', () => {
      expect(maybeGenerateSessionCreation(0)).toBeUndefined();
    });

    it('returns object with "create" property if sessionsCount is 1', () => {
      expect(maybeGenerateSessionCreation(1)).toHaveProperty('create');
    });

    it('returns object with "createMany" property if sessionsCount is more than 1', () => {
      expect(maybeGenerateSessionCreation(2)).toHaveProperty('createMany');
    });
  });
});
