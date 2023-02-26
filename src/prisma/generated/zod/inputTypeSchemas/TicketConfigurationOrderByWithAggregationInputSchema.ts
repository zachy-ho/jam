import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';
import { TicketConfigurationCountOrderByAggregateInputSchema } from './TicketConfigurationCountOrderByAggregateInputSchema';
import { TicketConfigurationAvgOrderByAggregateInputSchema } from './TicketConfigurationAvgOrderByAggregateInputSchema';
import { TicketConfigurationMaxOrderByAggregateInputSchema } from './TicketConfigurationMaxOrderByAggregateInputSchema';
import { TicketConfigurationMinOrderByAggregateInputSchema } from './TicketConfigurationMinOrderByAggregateInputSchema';
import { TicketConfigurationSumOrderByAggregateInputSchema } from './TicketConfigurationSumOrderByAggregateInputSchema';

export const TicketConfigurationOrderByWithAggregationInputSchema: z.ZodType<Prisma.TicketConfigurationOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  jamId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TicketConfigurationCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TicketConfigurationAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TicketConfigurationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TicketConfigurationMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TicketConfigurationSumOrderByAggregateInputSchema).optional(),
}).strict();

export default TicketConfigurationOrderByWithAggregationInputSchema;
