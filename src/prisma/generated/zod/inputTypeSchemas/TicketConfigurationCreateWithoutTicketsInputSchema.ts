import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamCreateNestedOneWithoutTicketConfigurationInputSchema } from './JamCreateNestedOneWithoutTicketConfigurationInputSchema';

export const TicketConfigurationCreateWithoutTicketsInputSchema: z.ZodType<Prisma.TicketConfigurationCreateWithoutTicketsInput> = z.object({
  id: z.string(),
  jam: z.lazy(() => JamCreateNestedOneWithoutTicketConfigurationInputSchema),
  name: z.string(),
  description: z.string().optional().nullable(),
  price: z.number().optional().nullable(),
}).strict();

export default TicketConfigurationCreateWithoutTicketsInputSchema;
