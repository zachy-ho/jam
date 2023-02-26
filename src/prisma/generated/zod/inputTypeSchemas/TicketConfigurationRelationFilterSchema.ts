import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketConfigurationWhereInputSchema } from './TicketConfigurationWhereInputSchema';

export const TicketConfigurationRelationFilterSchema: z.ZodType<Prisma.TicketConfigurationRelationFilter> = z.object({
  is: z.lazy(() => TicketConfigurationWhereInputSchema).optional(),
  isNot: z.lazy(() => TicketConfigurationWhereInputSchema).optional(),
}).strict();

export default TicketConfigurationRelationFilterSchema;
