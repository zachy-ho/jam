import { z } from 'zod';
import { type Prisma } from '@prisma/client';

export const TicketUncheckedCreateInputSchema: z.ZodType<Prisma.TicketUncheckedCreateInput> = z.object({
  id: z.string(),
  jamId: z.string(),
  serialNumber: z.number().int().optional(),
  ticketConfigurationId: z.string(),
}).strict();

export default TicketUncheckedCreateInputSchema;
