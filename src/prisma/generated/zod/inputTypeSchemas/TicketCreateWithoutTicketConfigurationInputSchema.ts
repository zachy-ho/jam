import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamCreateNestedOneWithoutTicketsInputSchema } from './JamCreateNestedOneWithoutTicketsInputSchema';

export const TicketCreateWithoutTicketConfigurationInputSchema: z.ZodType<Prisma.TicketCreateWithoutTicketConfigurationInput> = z.object({
  id: z.string(),
  jam: z.lazy(() => JamCreateNestedOneWithoutTicketsInputSchema),
  serialNumber: z.number().optional(),
}).strict();

export default TicketCreateWithoutTicketConfigurationInputSchema;
