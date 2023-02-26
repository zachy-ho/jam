import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketWhereInputSchema } from './TicketWhereInputSchema';

export const TicketListRelationFilterSchema: z.ZodType<Prisma.TicketListRelationFilter> = z.object({
  every: z.lazy(() => TicketWhereInputSchema).optional(),
  some: z.lazy(() => TicketWhereInputSchema).optional(),
  none: z.lazy(() => TicketWhereInputSchema).optional(),
}).strict();

export default TicketListRelationFilterSchema;
