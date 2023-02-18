import type { Prisma, PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import type { PositiveInteger } from 'types';

export async function seedUsers<N extends number>(
  client: PrismaClient,
  usersCount: PositiveInteger<N>
) {
  const start = Date.now();
  await client.user.deleteMany({});

  const users: Prisma.UserCreateArgs['data'][] = [...Array(usersCount)].map((_) => ({
    id: faker.datatype.uuid(),
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
  }));

  const result = await Promise.all(
    users.map((user) => client.user.create({ data: user }))
  );

  return result;
}
