import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';

export const TicketCountOrderByAggregateInputSchema: z.ZodType<Prisma.TicketCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  jamId: z.lazy(() => SortOrderSchema).optional(),
  serialNumber: z.lazy(() => SortOrderSchema).optional(),
  ticketConfigurationId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export default TicketCountOrderByAggregateInputSchema;
