import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';

export const TicketSumOrderByAggregateInputSchema: z.ZodType<Prisma.TicketSumOrderByAggregateInput> = z.object({
  serialNumber: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export default TicketSumOrderByAggregateInputSchema;
