import { z } from 'zod';
import { type Prisma } from '@prisma/client';

export const TicketCreateManyInputSchema: z.ZodType<Prisma.TicketCreateManyInput> = z.object({
  id: z.string(),
  jamId: z.string(),
  serialNumber: z.number().int().optional(),
  ticketConfigurationId: z.string(),
}).strict();

export default TicketCreateManyInputSchema;
