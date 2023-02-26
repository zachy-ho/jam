import { z } from 'zod';
import { type Prisma } from '@prisma/client';

export const UserCreateWithoutOrganisedJamsInputSchema: z.ZodType<Prisma.UserCreateWithoutOrganisedJamsInput> = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
}).strict();

export default UserCreateWithoutOrganisedJamsInputSchema;
