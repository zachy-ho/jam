import { z } from 'zod';
import { type Prisma } from '@prisma/client';

export const TicketConfigurationCreateManyInputSchema: z.ZodType<Prisma.TicketConfigurationCreateManyInput> = z.object({
  id: z.string(),
  jamId: z.string(),
  name: z.string(),
  description: z.string().optional().nullable(),
  price: z.number().optional().nullable(),
}).strict();

export default TicketConfigurationCreateManyInputSchema;
