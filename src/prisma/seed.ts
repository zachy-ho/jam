import { prisma } from 'server/prisma';
import type { Prisma, PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import type { PositiveInteger } from 'types';

async function seed() {
  // Seed users
  seedUsers(prisma, 3);

  // Seed jams
  seedJams(prisma);
}

export async function seedUsers<N extends number>(client: PrismaClient, usersCount: PositiveInteger<N>) {
  await client.user.deleteMany({});

  const users: Prisma.UserCreateArgs['data'][] = Array(usersCount).map((_) => ({
    id: faker.datatype.uuid(),
    email: faker.internet.email(),
    password: faker.internet.password(undefined, true),
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
  }));

  const result = await Promise.all(
    users.map((user) => client.user.create({ data: user }))
  );

  return result;
}

export async function seedJams(client: PrismaClient) {
  await client.jam.deleteMany({});
  const jams: Prisma.JamCreateArgs['data'][] = [
    {
      id: uuidv4(),
      name: 'Doggo Party',
      sessions: {
        create: {
          id: uuidv4(),
          date_from: new Date(2022, 0, 15),
          date_to: new Date(2022, 0, 15),
        },
      },
    },
    {
      id: uuidv4(),
      name: 'The House Jam',
      sessions: {
        create: {
          id: uuidv4(),
          date_from: new Date(2022, 2, 5),
          date_to: new Date(2022, 2, 5),
        },
      },
    },
    {
      id: uuidv4(),
      name: 'Destructive Stepz',
      sessions: {
        createMany: {
          data: [
            {
              id: uuidv4(),
              date_from: new Date(2022, 9, 1),
              date_to: new Date(2022, 9, 1),
            },
            {
              id: uuidv4(),
              date_from: new Date(2022, 9, 2),
              date_to: new Date(2022, 9, 2),
            },
          ],
        },
      },
    },
  ];

  const result = await Promise.all(
    jams.map((jam) =>
      client.jam.create({
        data: jam,
      })
    )
  );

  return result;
}

seed();
