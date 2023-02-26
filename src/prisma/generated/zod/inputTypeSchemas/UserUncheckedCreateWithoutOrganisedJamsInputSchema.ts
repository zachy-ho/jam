import { z } from 'zod';
import { type Prisma } from '@prisma/client';

export const UserUncheckedCreateWithoutOrganisedJamsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutOrganisedJamsInput> = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
}).strict();

export default UserUncheckedCreateWithoutOrganisedJamsInputSchema;
