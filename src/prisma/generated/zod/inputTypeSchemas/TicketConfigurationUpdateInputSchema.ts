import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { JamUpdateOneRequiredWithoutTicketConfigurationNestedInputSchema } from './JamUpdateOneRequiredWithoutTicketConfigurationNestedInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { TicketUpdateManyWithoutTicketConfigurationNestedInputSchema } from './TicketUpdateManyWithoutTicketConfigurationNestedInputSchema';

export const TicketConfigurationUpdateInputSchema: z.ZodType<Prisma.TicketConfigurationUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  jam: z.lazy(() => JamUpdateOneRequiredWithoutTicketConfigurationNestedInputSchema).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tickets: z.lazy(() => TicketUpdateManyWithoutTicketConfigurationNestedInputSchema).optional(),
}).strict();

export default TicketConfigurationUpdateInputSchema;
