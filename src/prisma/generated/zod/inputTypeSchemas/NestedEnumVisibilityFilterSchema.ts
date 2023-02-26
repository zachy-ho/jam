import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { VisibilitySchema } from './VisibilitySchema';

export const NestedEnumVisibilityFilterSchema: z.ZodType<Prisma.NestedEnumVisibilityFilter> = z.object({
  equals: z.lazy(() => VisibilitySchema).optional(),
  in: z.lazy(() => VisibilitySchema).array().optional(),
  notIn: z.lazy(() => VisibilitySchema).array().optional(),
  not: z.union([ z.lazy(() => VisibilitySchema),z.lazy(() => NestedEnumVisibilityFilterSchema) ]).optional(),
}).strict();

export default NestedEnumVisibilityFilterSchema;
