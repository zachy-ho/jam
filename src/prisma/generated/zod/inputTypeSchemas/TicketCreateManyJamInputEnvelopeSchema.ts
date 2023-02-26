import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketCreateManyJamInputSchema } from './TicketCreateManyJamInputSchema';

export const TicketCreateManyJamInputEnvelopeSchema: z.ZodType<Prisma.TicketCreateManyJamInputEnvelope> = z.object({
  data: z.lazy(() => TicketCreateManyJamInputSchema).array(),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default TicketCreateManyJamInputEnvelopeSchema;
