import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { UserUpdateWithoutOrganisedJamsInputSchema } from './UserUpdateWithoutOrganisedJamsInputSchema';
import { UserUncheckedUpdateWithoutOrganisedJamsInputSchema } from './UserUncheckedUpdateWithoutOrganisedJamsInputSchema';
import { UserCreateWithoutOrganisedJamsInputSchema } from './UserCreateWithoutOrganisedJamsInputSchema';
import { UserUncheckedCreateWithoutOrganisedJamsInputSchema } from './UserUncheckedCreateWithoutOrganisedJamsInputSchema';

export const UserUpsertWithoutOrganisedJamsInputSchema: z.ZodType<Prisma.UserUpsertWithoutOrganisedJamsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutOrganisedJamsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutOrganisedJamsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutOrganisedJamsInputSchema),z.lazy(() => UserUncheckedCreateWithoutOrganisedJamsInputSchema) ]),
}).strict();

export default UserUpsertWithoutOrganisedJamsInputSchema;
