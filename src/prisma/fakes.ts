// Static fake data to make seeding easier
import type { Prisma } from '@prisma/client';

export const fakeUsers: Prisma.UserCreateInput[] = [{
  id: '5be1f547-8950-4343-bd0d-c194f738234f',
  email: 'bob_builder@gmail.com',
  firstName: 'Bob',
  lastName: 'Builder',
}, {
  id: 'e3bae61b-d24d-4dff-9416-84a8cc41339c',
  email: 'spongebob_squarepants@gmail.com',
  firstName: 'Spongebob',
  lastName: 'Squarepants',
}, {
  id: '0db683a1-720f-4383-b186-8f9fbcb0916c',
  email: 'patrick_starphish@gmail.com',
  firstName: 'Patrick',
  lastName: 'Starphish',
}];
