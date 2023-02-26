import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamOrganiserCreateNestedManyWithoutUserInputSchema } from './JamOrganiserCreateNestedManyWithoutUserInputSchema';

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  organisedJams: z.lazy(() => JamOrganiserCreateNestedManyWithoutUserInputSchema).optional(),
}).strict();

export default UserCreateInputSchema;
