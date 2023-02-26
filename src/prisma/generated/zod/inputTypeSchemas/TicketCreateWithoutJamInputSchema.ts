import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketConfigurationCreateNestedOneWithoutTicketsInputSchema } from './TicketConfigurationCreateNestedOneWithoutTicketsInputSchema';

export const TicketCreateWithoutJamInputSchema: z.ZodType<Prisma.TicketCreateWithoutJamInput> = z.object({
  id: z.string(),
  serialNumber: z.number().optional(),
  ticketConfiguration: z.lazy(() => TicketConfigurationCreateNestedOneWithoutTicketsInputSchema),
}).strict();

export default TicketCreateWithoutJamInputSchema;
