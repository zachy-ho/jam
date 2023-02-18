// Import paths in this file should be relative paths as we expect this file to be manually executed in the CLI

import { prisma } from '../server/prisma';
import { deleteAllJamsOrganisers, seedJamsBase, seedUsers } from './seeders';

(async function seed() {
  await deleteAllJamsOrganisers(prisma);

  try {
    await seedUsers(prisma);
  } catch (e) {
    console.error("Something wrong with seeding Users");
    throw e;
  }

  try {
    await seedJamsBase(prisma);
  } catch (e) {
    console.error("Something wrong with seeding Jams");
    throw e;
  }
})();
