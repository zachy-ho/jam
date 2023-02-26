import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';

export const TicketConfigurationSumOrderByAggregateInputSchema: z.ZodType<Prisma.TicketConfigurationSumOrderByAggregateInput> = z.object({
  price: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export default TicketConfigurationSumOrderByAggregateInputSchema;
