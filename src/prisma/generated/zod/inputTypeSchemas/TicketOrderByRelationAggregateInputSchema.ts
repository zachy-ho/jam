import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';

export const TicketOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TicketOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export default TicketOrderByRelationAggregateInputSchema;
