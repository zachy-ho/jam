// Import paths in this file should be relative paths as we expect this file to be manually executed in the CLI

import { prisma } from '../server/prisma';
import { seedUsers, seedJams } from './seeders';

async function seed() {
  // Seed users
  seedUsers(prisma, 3);

  // Seed jams
  seedJams(prisma, {
    jamsCount: 3,
    sessionsPerJam: 'random'
  });
}

seed();
