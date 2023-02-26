import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { EnumVisibilityWithAggregatesFilterSchema } from './EnumVisibilityWithAggregatesFilterSchema';
import { VisibilitySchema } from './VisibilitySchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const JamScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.JamScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => JamScalarWhereWithAggregatesInputSchema),z.lazy(() => JamScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => JamScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => JamScalarWhereWithAggregatesInputSchema),z.lazy(() => JamScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  startDatetime: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  endDatetime: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  visibility: z.union([ z.lazy(() => EnumVisibilityWithAggregatesFilterSchema),z.lazy(() => VisibilitySchema) ]).optional(),
  summary: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  venue: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default JamScalarWhereWithAggregatesInputSchema;
