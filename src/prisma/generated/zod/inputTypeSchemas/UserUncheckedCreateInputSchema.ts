import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamOrganiserUncheckedCreateNestedManyWithoutUserInputSchema } from './JamOrganiserUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  organisedJams: z.lazy(() => JamOrganiserUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
}).strict();

export default UserUncheckedCreateInputSchema;
