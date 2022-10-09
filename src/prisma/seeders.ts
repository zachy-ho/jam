import type { Prisma, PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import type { PositiveInteger } from 'types';

const MAX_SESSIONS_PER_JAM = 3;

export async function seedUsers<N extends number>(
  client: PrismaClient,
  usersCount: PositiveInteger<N>
) {
  await client.user.deleteMany({});

  const users: Prisma.UserCreateArgs['data'][] = [...Array(usersCount)].map((_) => ({
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

type SeedJamsOpts<N extends number> = {
  jamsCount: PositiveInteger<N>;
  sessionsPerJam: 0 | PositiveInteger<N> | 'random';
};

export async function seedJams<N extends number>(
  client: PrismaClient,
  opts: SeedJamsOpts<N>
) {
  await client.session.deleteMany({});
  await client.jam.deleteMany({});
  const jams: Prisma.JamCreateArgs['data'][] = [...Array(opts.jamsCount)].map(
    (_) => ({
      id: faker.datatype.uuid(),
      name: faker.lorem.words(),
      sessions: maybeGenerateSessionCreation(opts.sessionsPerJam)
    })
  );

  const result = await Promise.all(
    jams.map((jam) =>
      client.jam.create({
        data: jam,
      })
    )
  );

  return result;
}

export function maybeGenerateSessionCreation<N extends number>(
  sessionsCount: SeedJamsOpts<N>['sessionsPerJam']
) {
  if (sessionsCount === 0) {
    return undefined;
  }
  const count =
    sessionsCount === 'random'
      ? Math.round(Math.random() * MAX_SESSIONS_PER_JAM)
      : sessionsCount;
  if (count === 1) {
    const from = faker.date.soon();
    const to = new Date(from.getHours() + 2);
    return {
      create: {
        id: faker.datatype.uuid(),
        date_from: from,
        date_to: to,
      },
    };
  }

  return {
    createMany: {
      data: [...Array(count)].map((_) => {
        const from = faker.date.soon();
        const to = new Date(from.getHours() + 2);
        return {
          id: faker.datatype.uuid(),
          date_from: from,
          date_to: to,
        };
      }),
    },
  };
}

