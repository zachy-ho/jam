import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';

export const TicketConfigurationAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TicketConfigurationAvgOrderByAggregateInput> = z.object({
  price: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export default TicketConfigurationAvgOrderByAggregateInputSchema;
