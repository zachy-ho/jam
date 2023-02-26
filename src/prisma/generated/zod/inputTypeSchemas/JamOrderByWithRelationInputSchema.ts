import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';
import { TicketOrderByRelationAggregateInputSchema } from './TicketOrderByRelationAggregateInputSchema';
import { TicketConfigurationOrderByRelationAggregateInputSchema } from './TicketConfigurationOrderByRelationAggregateInputSchema';
import { JamOrganiserOrderByRelationAggregateInputSchema } from './JamOrganiserOrderByRelationAggregateInputSchema';

export const JamOrderByWithRelationInputSchema: z.ZodType<Prisma.JamOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  startDatetime: z.lazy(() => SortOrderSchema).optional(),
  endDatetime: z.lazy(() => SortOrderSchema).optional(),
  visibility: z.lazy(() => SortOrderSchema).optional(),
  summary: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  venue: z.lazy(() => SortOrderSchema).optional(),
  tickets: z.lazy(() => TicketOrderByRelationAggregateInputSchema).optional(),
  ticketConfiguration: z.lazy(() => TicketConfigurationOrderByRelationAggregateInputSchema).optional(),
  organisers: z.lazy(() => JamOrganiserOrderByRelationAggregateInputSchema).optional(),
}).strict();

export default JamOrderByWithRelationInputSchema;
