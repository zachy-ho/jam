import { z } from 'zod';
import { type Prisma } from '@prisma/client';

export const TicketUncheckedCreateWithoutTicketConfigurationInputSchema: z.ZodType<Prisma.TicketUncheckedCreateWithoutTicketConfigurationInput> = z.object({
  id: z.string(),
  jamId: z.string(),
  serialNumber: z.number().optional(),
}).strict();

export default TicketUncheckedCreateWithoutTicketConfigurationInputSchema;
