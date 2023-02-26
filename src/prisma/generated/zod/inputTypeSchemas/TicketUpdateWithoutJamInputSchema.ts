import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { TicketConfigurationUpdateOneRequiredWithoutTicketsNestedInputSchema } from './TicketConfigurationUpdateOneRequiredWithoutTicketsNestedInputSchema';

export const TicketUpdateWithoutJamInputSchema: z.ZodType<Prisma.TicketUpdateWithoutJamInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  serialNumber: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ticketConfiguration: z.lazy(() => TicketConfigurationUpdateOneRequiredWithoutTicketsNestedInputSchema).optional(),
}).strict();

export default TicketUpdateWithoutJamInputSchema;
