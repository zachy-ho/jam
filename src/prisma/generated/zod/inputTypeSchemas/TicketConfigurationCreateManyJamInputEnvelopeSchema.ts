import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketConfigurationCreateManyJamInputSchema } from './TicketConfigurationCreateManyJamInputSchema';

export const TicketConfigurationCreateManyJamInputEnvelopeSchema: z.ZodType<Prisma.TicketConfigurationCreateManyJamInputEnvelope> = z.object({
  data: z.lazy(() => TicketConfigurationCreateManyJamInputSchema).array(),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default TicketConfigurationCreateManyJamInputEnvelopeSchema;
