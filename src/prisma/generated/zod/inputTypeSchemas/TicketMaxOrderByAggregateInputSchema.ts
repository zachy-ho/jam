import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';

export const TicketMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TicketMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  jamId: z.lazy(() => SortOrderSchema).optional(),
  serialNumber: z.lazy(() => SortOrderSchema).optional(),
  ticketConfigurationId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export default TicketMaxOrderByAggregateInputSchema;
