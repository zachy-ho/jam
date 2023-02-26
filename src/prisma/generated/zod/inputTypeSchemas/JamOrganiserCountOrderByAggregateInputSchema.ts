import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';

export const JamOrganiserCountOrderByAggregateInputSchema: z.ZodType<Prisma.JamOrganiserCountOrderByAggregateInput> = z.object({
  jamId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export default JamOrganiserCountOrderByAggregateInputSchema;
