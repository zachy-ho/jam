import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketUncheckedCreateNestedManyWithoutTicketConfigurationInputSchema } from './TicketUncheckedCreateNestedManyWithoutTicketConfigurationInputSchema';

export const TicketConfigurationUncheckedCreateWithoutJamInputSchema: z.ZodType<Prisma.TicketConfigurationUncheckedCreateWithoutJamInput> = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional().nullable(),
  price: z.number().optional().nullable(),
  tickets: z.lazy(() => TicketUncheckedCreateNestedManyWithoutTicketConfigurationInputSchema).optional(),
}).strict();

export default TicketConfigurationUncheckedCreateWithoutJamInputSchema;
