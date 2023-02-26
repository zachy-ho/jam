import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';
import { JamOrderByWithRelationInputSchema } from './JamOrderByWithRelationInputSchema';
import { TicketOrderByRelationAggregateInputSchema } from './TicketOrderByRelationAggregateInputSchema';

export const TicketConfigurationOrderByWithRelationInputSchema: z.ZodType<Prisma.TicketConfigurationOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  jam: z.lazy(() => JamOrderByWithRelationInputSchema).optional(),
  jamId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  tickets: z.lazy(() => TicketOrderByRelationAggregateInputSchema).optional(),
}).strict();

export default TicketConfigurationOrderByWithRelationInputSchema;
