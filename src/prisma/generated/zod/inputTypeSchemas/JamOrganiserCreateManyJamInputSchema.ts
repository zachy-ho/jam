import { z } from 'zod';
import { type Prisma } from '@prisma/client';

export const JamOrganiserCreateManyJamInputSchema: z.ZodType<Prisma.JamOrganiserCreateManyJamInput> = z.object({
  userId: z.string(),
}).strict();

export default JamOrganiserCreateManyJamInputSchema;
