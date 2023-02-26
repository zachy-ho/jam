import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { VisibilitySchema } from './VisibilitySchema';
import { EnumVisibilityFieldUpdateOperationsInputSchema } from './EnumVisibilityFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { TicketUpdateManyWithoutJamNestedInputSchema } from './TicketUpdateManyWithoutJamNestedInputSchema';
import { TicketConfigurationUpdateManyWithoutJamNestedInputSchema } from './TicketConfigurationUpdateManyWithoutJamNestedInputSchema';
import { JamOrganiserUpdateManyWithoutJamNestedInputSchema } from './JamOrganiserUpdateManyWithoutJamNestedInputSchema';

export const JamUpdateInputSchema: z.ZodType<Prisma.JamUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startDatetime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDatetime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  visibility: z.union([ z.lazy(() => VisibilitySchema),z.lazy(() => EnumVisibilityFieldUpdateOperationsInputSchema) ]).optional(),
  summary: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  venue: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tickets: z.lazy(() => TicketUpdateManyWithoutJamNestedInputSchema).optional(),
  ticketConfiguration: z.lazy(() => TicketConfigurationUpdateManyWithoutJamNestedInputSchema).optional(),
  organisers: z.lazy(() => JamOrganiserUpdateManyWithoutJamNestedInputSchema).optional(),
}).strict();

export default JamUpdateInputSchema;
