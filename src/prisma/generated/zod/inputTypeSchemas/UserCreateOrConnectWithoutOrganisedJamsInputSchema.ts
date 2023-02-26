import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutOrganisedJamsInputSchema } from './UserCreateWithoutOrganisedJamsInputSchema';
import { UserUncheckedCreateWithoutOrganisedJamsInputSchema } from './UserUncheckedCreateWithoutOrganisedJamsInputSchema';

export const UserCreateOrConnectWithoutOrganisedJamsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutOrganisedJamsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutOrganisedJamsInputSchema),z.lazy(() => UserUncheckedCreateWithoutOrganisedJamsInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutOrganisedJamsInputSchema;
