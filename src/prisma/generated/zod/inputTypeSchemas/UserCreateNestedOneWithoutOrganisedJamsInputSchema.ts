import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { UserCreateWithoutOrganisedJamsInputSchema } from './UserCreateWithoutOrganisedJamsInputSchema';
import { UserUncheckedCreateWithoutOrganisedJamsInputSchema } from './UserUncheckedCreateWithoutOrganisedJamsInputSchema';
import { UserCreateOrConnectWithoutOrganisedJamsInputSchema } from './UserCreateOrConnectWithoutOrganisedJamsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutOrganisedJamsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutOrganisedJamsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutOrganisedJamsInputSchema),z.lazy(() => UserUncheckedCreateWithoutOrganisedJamsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutOrganisedJamsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
}).strict();

export default UserCreateNestedOneWithoutOrganisedJamsInputSchema;
