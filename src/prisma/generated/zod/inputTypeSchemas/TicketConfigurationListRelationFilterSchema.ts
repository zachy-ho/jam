import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketConfigurationWhereInputSchema } from './TicketConfigurationWhereInputSchema';

export const TicketConfigurationListRelationFilterSchema: z.ZodType<Prisma.TicketConfigurationListRelationFilter> = z.object({
  every: z.lazy(() => TicketConfigurationWhereInputSchema).optional(),
  some: z.lazy(() => TicketConfigurationWhereInputSchema).optional(),
  none: z.lazy(() => TicketConfigurationWhereInputSchema).optional(),
}).strict();

export default TicketConfigurationListRelationFilterSchema;
