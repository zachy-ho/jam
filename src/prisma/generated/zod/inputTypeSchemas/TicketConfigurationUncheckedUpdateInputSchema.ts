import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { TicketUncheckedUpdateManyWithoutTicketConfigurationNestedInputSchema } from './TicketUncheckedUpdateManyWithoutTicketConfigurationNestedInputSchema';

export const TicketConfigurationUncheckedUpdateInputSchema: z.ZodType<Prisma.TicketConfigurationUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  jamId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tickets: z.lazy(() => TicketUncheckedUpdateManyWithoutTicketConfigurationNestedInputSchema).optional(),
}).strict();

export default TicketConfigurationUncheckedUpdateInputSchema;
