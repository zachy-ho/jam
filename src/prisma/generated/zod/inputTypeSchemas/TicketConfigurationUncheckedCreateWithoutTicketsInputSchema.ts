import { z } from 'zod';
import { type Prisma } from '@prisma/client';

export const TicketConfigurationUncheckedCreateWithoutTicketsInputSchema: z.ZodType<Prisma.TicketConfigurationUncheckedCreateWithoutTicketsInput> = z.object({
  id: z.string(),
  jamId: z.string(),
  name: z.string(),
  description: z.string().optional().nullable(),
  price: z.number().optional().nullable(),
}).strict();

export default TicketConfigurationUncheckedCreateWithoutTicketsInputSchema;
