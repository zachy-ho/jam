import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketCreateNestedManyWithoutTicketConfigurationInputSchema } from './TicketCreateNestedManyWithoutTicketConfigurationInputSchema';

export const TicketConfigurationCreateWithoutJamInputSchema: z.ZodType<Prisma.TicketConfigurationCreateWithoutJamInput> = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional().nullable(),
  price: z.number().optional().nullable(),
  tickets: z.lazy(() => TicketCreateNestedManyWithoutTicketConfigurationInputSchema).optional(),
}).strict();

export default TicketConfigurationCreateWithoutJamInputSchema;
