import { z } from 'zod';
import { type Prisma } from '@prisma/client';

export const TicketUncheckedCreateWithoutJamInputSchema: z.ZodType<Prisma.TicketUncheckedCreateWithoutJamInput> = z.object({
  id: z.string(),
  serialNumber: z.number().optional(),
  ticketConfigurationId: z.string(),
}).strict();

export default TicketUncheckedCreateWithoutJamInputSchema;
