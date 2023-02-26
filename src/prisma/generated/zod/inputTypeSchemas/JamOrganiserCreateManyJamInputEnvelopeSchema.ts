import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamOrganiserCreateManyJamInputSchema } from './JamOrganiserCreateManyJamInputSchema';

export const JamOrganiserCreateManyJamInputEnvelopeSchema: z.ZodType<Prisma.JamOrganiserCreateManyJamInputEnvelope> = z.object({
  data: z.lazy(() => JamOrganiserCreateManyJamInputSchema).array(),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default JamOrganiserCreateManyJamInputEnvelopeSchema;
