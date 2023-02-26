import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';

export const JamCountOrderByAggregateInputSchema: z.ZodType<Prisma.JamCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  startDatetime: z.lazy(() => SortOrderSchema).optional(),
  endDatetime: z.lazy(() => SortOrderSchema).optional(),
  visibility: z.lazy(() => SortOrderSchema).optional(),
  summary: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  venue: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export default JamCountOrderByAggregateInputSchema;
