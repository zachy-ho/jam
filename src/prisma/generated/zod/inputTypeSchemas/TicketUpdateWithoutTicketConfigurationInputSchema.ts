import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { JamUpdateOneRequiredWithoutTicketsNestedInputSchema } from './JamUpdateOneRequiredWithoutTicketsNestedInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const TicketUpdateWithoutTicketConfigurationInputSchema: z.ZodType<Prisma.TicketUpdateWithoutTicketConfigurationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  jam: z.lazy(() => JamUpdateOneRequiredWithoutTicketsNestedInputSchema).optional(),
  serialNumber: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default TicketUpdateWithoutTicketConfigurationInputSchema;
