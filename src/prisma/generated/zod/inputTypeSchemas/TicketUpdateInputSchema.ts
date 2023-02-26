import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { JamUpdateOneRequiredWithoutTicketsNestedInputSchema } from './JamUpdateOneRequiredWithoutTicketsNestedInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { TicketConfigurationUpdateOneRequiredWithoutTicketsNestedInputSchema } from './TicketConfigurationUpdateOneRequiredWithoutTicketsNestedInputSchema';

export const TicketUpdateInputSchema: z.ZodType<Prisma.TicketUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  jam: z.lazy(() => JamUpdateOneRequiredWithoutTicketsNestedInputSchema).optional(),
  serialNumber: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ticketConfiguration: z.lazy(() => TicketConfigurationUpdateOneRequiredWithoutTicketsNestedInputSchema).optional(),
}).strict();

export default TicketUpdateInputSchema;
