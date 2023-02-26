import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamCreateNestedOneWithoutTicketConfigurationInputSchema } from './JamCreateNestedOneWithoutTicketConfigurationInputSchema';
import { TicketCreateNestedManyWithoutTicketConfigurationInputSchema } from './TicketCreateNestedManyWithoutTicketConfigurationInputSchema';

export const TicketConfigurationCreateInputSchema: z.ZodType<Prisma.TicketConfigurationCreateInput> = z.object({
  id: z.string(),
  jam: z.lazy(() => JamCreateNestedOneWithoutTicketConfigurationInputSchema),
  name: z.string(),
  description: z.string().optional().nullable(),
  price: z.number().optional().nullable(),
  tickets: z.lazy(() => TicketCreateNestedManyWithoutTicketConfigurationInputSchema).optional(),
}).strict();

export default TicketConfigurationCreateInputSchema;
