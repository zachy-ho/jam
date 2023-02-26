import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';

export const TicketConfigurationOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TicketConfigurationOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export default TicketConfigurationOrderByRelationAggregateInputSchema;
