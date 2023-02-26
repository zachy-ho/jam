import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';
import { JamOrganiserCountOrderByAggregateInputSchema } from './JamOrganiserCountOrderByAggregateInputSchema';
import { JamOrganiserMaxOrderByAggregateInputSchema } from './JamOrganiserMaxOrderByAggregateInputSchema';
import { JamOrganiserMinOrderByAggregateInputSchema } from './JamOrganiserMinOrderByAggregateInputSchema';

export const JamOrganiserOrderByWithAggregationInputSchema: z.ZodType<Prisma.JamOrganiserOrderByWithAggregationInput> = z.object({
  jamId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => JamOrganiserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => JamOrganiserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => JamOrganiserMinOrderByAggregateInputSchema).optional(),
}).strict();

export default JamOrganiserOrderByWithAggregationInputSchema;
