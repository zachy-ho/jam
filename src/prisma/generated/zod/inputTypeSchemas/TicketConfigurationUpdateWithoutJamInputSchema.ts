import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { TicketUpdateManyWithoutTicketConfigurationNestedInputSchema } from './TicketUpdateManyWithoutTicketConfigurationNestedInputSchema';

export const TicketConfigurationUpdateWithoutJamInputSchema: z.ZodType<Prisma.TicketConfigurationUpdateWithoutJamInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tickets: z.lazy(() => TicketUpdateManyWithoutTicketConfigurationNestedInputSchema).optional(),
}).strict();

export default TicketConfigurationUpdateWithoutJamInputSchema;
