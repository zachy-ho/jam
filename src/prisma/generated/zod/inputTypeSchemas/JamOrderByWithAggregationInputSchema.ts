import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';
import { JamCountOrderByAggregateInputSchema } from './JamCountOrderByAggregateInputSchema';
import { JamMaxOrderByAggregateInputSchema } from './JamMaxOrderByAggregateInputSchema';
import { JamMinOrderByAggregateInputSchema } from './JamMinOrderByAggregateInputSchema';

export const JamOrderByWithAggregationInputSchema: z.ZodType<Prisma.JamOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  startDatetime: z.lazy(() => SortOrderSchema).optional(),
  endDatetime: z.lazy(() => SortOrderSchema).optional(),
  visibility: z.lazy(() => SortOrderSchema).optional(),
  summary: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  venue: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => JamCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => JamMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => JamMinOrderByAggregateInputSchema).optional(),
}).strict();

export default JamOrderByWithAggregationInputSchema;
