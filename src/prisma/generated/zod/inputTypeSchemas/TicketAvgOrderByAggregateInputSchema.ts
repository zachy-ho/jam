import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';

export const TicketAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TicketAvgOrderByAggregateInput> = z.object({
  serialNumber: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export default TicketAvgOrderByAggregateInputSchema;
