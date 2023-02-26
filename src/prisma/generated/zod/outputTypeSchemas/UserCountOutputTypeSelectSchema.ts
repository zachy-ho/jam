import { z } from 'zod';
import { type Prisma } from '@prisma/client';

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  organisedJams: z.boolean().optional(),
}).strict();

export default UserCountOutputTypeSelectSchema;
