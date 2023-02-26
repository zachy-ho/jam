import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamCreateNestedOneWithoutTicketsInputSchema } from './JamCreateNestedOneWithoutTicketsInputSchema';
import { TicketConfigurationCreateNestedOneWithoutTicketsInputSchema } from './TicketConfigurationCreateNestedOneWithoutTicketsInputSchema';

export const TicketCreateInputSchema: z.ZodType<Prisma.TicketCreateInput> = z.object({
  id: z.string(),
  jam: z.lazy(() => JamCreateNestedOneWithoutTicketsInputSchema),
  serialNumber: z.number().int().optional(),
  ticketConfiguration: z.lazy(() => TicketConfigurationCreateNestedOneWithoutTicketsInputSchema),
}).strict();

export default TicketCreateInputSchema;
