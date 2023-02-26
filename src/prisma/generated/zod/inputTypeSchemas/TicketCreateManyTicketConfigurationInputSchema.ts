import { z } from 'zod';
import { type Prisma } from '@prisma/client';

export const TicketCreateManyTicketConfigurationInputSchema: z.ZodType<Prisma.TicketCreateManyTicketConfigurationInput> = z.object({
  id: z.string(),
  jamId: z.string(),
  serialNumber: z.number().int().optional(),
}).strict();

export default TicketCreateManyTicketConfigurationInputSchema;
