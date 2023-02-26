import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { VisibilitySchema } from './VisibilitySchema';
import { NestedEnumVisibilityWithAggregatesFilterSchema } from './NestedEnumVisibilityWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumVisibilityFilterSchema } from './NestedEnumVisibilityFilterSchema';

export const EnumVisibilityWithAggregatesFilterSchema: z.ZodType<Prisma.EnumVisibilityWithAggregatesFilter> = z.object({
  equals: z.lazy(() => VisibilitySchema).optional(),
  in: z.lazy(() => VisibilitySchema).array().optional(),
  notIn: z.lazy(() => VisibilitySchema).array().optional(),
  not: z.union([ z.lazy(() => VisibilitySchema),z.lazy(() => NestedEnumVisibilityWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumVisibilityFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumVisibilityFilterSchema).optional(),
}).strict();

export default EnumVisibilityWithAggregatesFilterSchema;
