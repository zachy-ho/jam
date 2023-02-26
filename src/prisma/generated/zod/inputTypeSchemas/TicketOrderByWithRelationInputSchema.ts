import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';
import { JamOrderByWithRelationInputSchema } from './JamOrderByWithRelationInputSchema';
import { TicketConfigurationOrderByWithRelationInputSchema } from './TicketConfigurationOrderByWithRelationInputSchema';

export const TicketOrderByWithRelationInputSchema: z.ZodType<Prisma.TicketOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  jam: z.lazy(() => JamOrderByWithRelationInputSchema).optional(),
  jamId: z.lazy(() => SortOrderSchema).optional(),
  serialNumber: z.lazy(() => SortOrderSchema).optional(),
  ticketConfiguration: z.lazy(() => TicketConfigurationOrderByWithRelationInputSchema).optional(),
  ticketConfigurationId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export default TicketOrderByWithRelationInputSchema;
