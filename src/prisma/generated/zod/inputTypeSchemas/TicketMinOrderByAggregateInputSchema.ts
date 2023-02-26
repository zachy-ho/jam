import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';

export const TicketMinOrderByAggregateInputSchema: z.ZodType<Prisma.TicketMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  jamId: z.lazy(() => SortOrderSchema).optional(),
  serialNumber: z.lazy(() => SortOrderSchema).optional(),
  ticketConfigurationId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export default TicketMinOrderByAggregateInputSchema;
