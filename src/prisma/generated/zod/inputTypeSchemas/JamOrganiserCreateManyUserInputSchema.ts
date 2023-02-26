import { z } from 'zod';
import { type Prisma } from '@prisma/client';

export const JamOrganiserCreateManyUserInputSchema: z.ZodType<Prisma.JamOrganiserCreateManyUserInput> = z.object({
  jamId: z.string(),
}).strict();

export default JamOrganiserCreateManyUserInputSchema;
