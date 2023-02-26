import { z } from 'zod';
import { type Prisma } from '@prisma/client';

export const JamOrganiserCreateManyInputSchema: z.ZodType<Prisma.JamOrganiserCreateManyInput> = z.object({
  jamId: z.string(),
  userId: z.string(),
}).strict();

export default JamOrganiserCreateManyInputSchema;
