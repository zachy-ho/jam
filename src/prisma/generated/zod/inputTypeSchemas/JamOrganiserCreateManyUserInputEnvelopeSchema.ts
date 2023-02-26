import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamOrganiserCreateManyUserInputSchema } from './JamOrganiserCreateManyUserInputSchema';

export const JamOrganiserCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.JamOrganiserCreateManyUserInputEnvelope> = z.object({
  data: z.lazy(() => JamOrganiserCreateManyUserInputSchema).array(),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default JamOrganiserCreateManyUserInputEnvelopeSchema;
