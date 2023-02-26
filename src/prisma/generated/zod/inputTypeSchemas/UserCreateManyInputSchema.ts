import { z } from 'zod';
import { type Prisma } from '@prisma/client';

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
}).strict();

export default UserCreateManyInputSchema;
