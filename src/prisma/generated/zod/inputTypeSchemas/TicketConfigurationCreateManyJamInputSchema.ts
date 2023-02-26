import { z } from 'zod';
import { type Prisma } from '@prisma/client';

export const TicketConfigurationCreateManyJamInputSchema: z.ZodType<Prisma.TicketConfigurationCreateManyJamInput> = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional().nullable(),
  price: z.number().optional().nullable(),
}).strict();

export default TicketConfigurationCreateManyJamInputSchema;
