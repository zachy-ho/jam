import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';

export const JamOrganiserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.JamOrganiserMaxOrderByAggregateInput> = z.object({
  jamId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export default JamOrganiserMaxOrderByAggregateInputSchema;
