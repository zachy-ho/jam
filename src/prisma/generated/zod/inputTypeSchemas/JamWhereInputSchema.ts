import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { EnumVisibilityFilterSchema } from './EnumVisibilityFilterSchema';
import { VisibilitySchema } from './VisibilitySchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { TicketListRelationFilterSchema } from './TicketListRelationFilterSchema';
import { TicketConfigurationListRelationFilterSchema } from './TicketConfigurationListRelationFilterSchema';
import { JamOrganiserListRelationFilterSchema } from './JamOrganiserListRelationFilterSchema';

export const JamWhereInputSchema: z.ZodType<Prisma.JamWhereInput> = z.object({
  AND: z.union([ z.lazy(() => JamWhereInputSchema),z.lazy(() => JamWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => JamWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => JamWhereInputSchema),z.lazy(() => JamWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  startDatetime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  endDatetime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  visibility: z.union([ z.lazy(() => EnumVisibilityFilterSchema),z.lazy(() => VisibilitySchema) ]).optional(),
  summary: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  venue: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  tickets: z.lazy(() => TicketListRelationFilterSchema).optional(),
  ticketConfiguration: z.lazy(() => TicketConfigurationListRelationFilterSchema).optional(),
  organisers: z.lazy(() => JamOrganiserListRelationFilterSchema).optional(),
}).strict();

export default JamWhereInputSchema;
