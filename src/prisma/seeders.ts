import { Prisma, PrismaClient, Visibility } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { fakeUsers } from './fakes';

const RANDOM_USERS_TO_SEED = 3;
const RANDOM_JAMS_TO_SEED = 3;

export async function seedUsers(
  client: PrismaClient,
): Promise<Prisma.BatchPayload> {
  try {
    await client.user.deleteMany({});
  } catch (e) {
    console.error("Something wrong with deleting all User entries");
    throw e;
  }

  const users: Prisma.UserCreateInput[] = fakeUsers.concat([...Array(RANDOM_USERS_TO_SEED)].map((_) => ({
    id: faker.datatype.uuid(),
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
  })));

  try {
    const result = await client.user.createMany({
      data: users
    });
    return result;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function seedJamsBase(
  client: PrismaClient,
) {
  try {
    await client.jam.deleteMany({});
    await client.jamsOrganisers.deleteMany({});
  } catch (e) {
    console.error("Something wrong with deleting all Jam and JamsOrganisers entries");
    throw e;
  }

  let count = RANDOM_JAMS_TO_SEED;
  const jams: Prisma.JamCreateInput[] = [];

  while (count > 0) {
    const startDatetime = faker.date.soon();
    const endDatetime = new Date(startDatetime);
    (endDatetime).setDate(startDatetime.getDate() + 1);

    const jamId = faker.datatype.uuid();

    jams.push({
      id: jamId,
      name: faker.random.word(),
      startDatetime,
      endDatetime,
      visibility: Math.random() < 0.5 ? Visibility.PUBLIC: Visibility.PRIVATE,
      organisers: {
        create: {
            userId: fakeUsers[Math.floor(Math.random() * fakeUsers.length)].id
        }
      },
      summary: faker.lorem.sentence(),
      description: faker.lorem.paragraph(),
      ticketConfiguration: {
        create: {
          id: faker.datatype.uuid(),
          name: 'General admission',
          description: 'For the basic bitches',
          price: 25,
          tickets: {
            createMany: {
              data: [
                {
                  id: faker.datatype.uuid(),
                  jamId,
                  serialNumber: faker.datatype.number(),
                }
              ]
            }
          }
        }
      }
    });

    count--;
  }

  // Cannot use jam.createMany because Prisma doesn't allow nesting writes inside a createMany
  const result = await Promise.all(jams.map((jam) => client.jam.create({ data: jam })));
  return result;
}

/**
* Deletes all records of jamsOrganisers.
* Required before records of Users or Organisers can be deleted.
*/
export async function deleteAllJamsOrganisers(client: PrismaClient) {
  try {
    await client.jamsOrganisers.deleteMany({});
  } catch (e) {
    console.error('Something wrong with deleting all JamsOrganisers records');
    throw e;
  }
}
