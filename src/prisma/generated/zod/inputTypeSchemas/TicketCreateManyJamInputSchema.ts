import { z } from 'zod';
import { type Prisma } from '@prisma/client';

export const TicketCreateManyJamInputSchema: z.ZodType<Prisma.TicketCreateManyJamInput> = z.object({
  id: z.string(),
  serialNumber: z.number().optional(),
  ticketConfigurationId: z.string(),
}).strict();

export default TicketCreateManyJamInputSchema;
