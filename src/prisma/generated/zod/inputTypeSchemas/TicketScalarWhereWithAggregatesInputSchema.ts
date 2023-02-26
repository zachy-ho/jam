import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const TicketScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TicketScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TicketScalarWhereWithAggregatesInputSchema),z.lazy(() => TicketScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TicketScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TicketScalarWhereWithAggregatesInputSchema),z.lazy(() => TicketScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  jamId: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  serialNumber: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  ticketConfigurationId: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default TicketScalarWhereWithAggregatesInputSchema;
