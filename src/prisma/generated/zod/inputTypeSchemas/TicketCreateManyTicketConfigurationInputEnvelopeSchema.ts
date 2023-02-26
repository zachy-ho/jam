import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketCreateManyTicketConfigurationInputSchema } from './TicketCreateManyTicketConfigurationInputSchema';

export const TicketCreateManyTicketConfigurationInputEnvelopeSchema: z.ZodType<Prisma.TicketCreateManyTicketConfigurationInputEnvelope> = z.object({
  data: z.lazy(() => TicketCreateManyTicketConfigurationInputSchema).array(),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default TicketCreateManyTicketConfigurationInputEnvelopeSchema;
