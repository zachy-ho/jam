import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';
import { TicketCountOrderByAggregateInputSchema } from './TicketCountOrderByAggregateInputSchema';
import { TicketAvgOrderByAggregateInputSchema } from './TicketAvgOrderByAggregateInputSchema';
import { TicketMaxOrderByAggregateInputSchema } from './TicketMaxOrderByAggregateInputSchema';
import { TicketMinOrderByAggregateInputSchema } from './TicketMinOrderByAggregateInputSchema';
import { TicketSumOrderByAggregateInputSchema } from './TicketSumOrderByAggregateInputSchema';

export const TicketOrderByWithAggregationInputSchema: z.ZodType<Prisma.TicketOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  jamId: z.lazy(() => SortOrderSchema).optional(),
  serialNumber: z.lazy(() => SortOrderSchema).optional(),
  ticketConfigurationId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TicketCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TicketAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TicketMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TicketMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TicketSumOrderByAggregateInputSchema).optional(),
}).strict();

export default TicketOrderByWithAggregationInputSchema;
