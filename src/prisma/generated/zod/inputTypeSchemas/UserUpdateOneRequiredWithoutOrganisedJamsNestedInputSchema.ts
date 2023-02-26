import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { UserCreateWithoutOrganisedJamsInputSchema } from './UserCreateWithoutOrganisedJamsInputSchema';
import { UserUncheckedCreateWithoutOrganisedJamsInputSchema } from './UserUncheckedCreateWithoutOrganisedJamsInputSchema';
import { UserCreateOrConnectWithoutOrganisedJamsInputSchema } from './UserCreateOrConnectWithoutOrganisedJamsInputSchema';
import { UserUpsertWithoutOrganisedJamsInputSchema } from './UserUpsertWithoutOrganisedJamsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateWithoutOrganisedJamsInputSchema } from './UserUpdateWithoutOrganisedJamsInputSchema';
import { UserUncheckedUpdateWithoutOrganisedJamsInputSchema } from './UserUncheckedUpdateWithoutOrganisedJamsInputSchema';

export const UserUpdateOneRequiredWithoutOrganisedJamsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutOrganisedJamsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutOrganisedJamsInputSchema),z.lazy(() => UserUncheckedCreateWithoutOrganisedJamsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutOrganisedJamsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutOrganisedJamsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithoutOrganisedJamsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutOrganisedJamsInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutOrganisedJamsNestedInputSchema;
