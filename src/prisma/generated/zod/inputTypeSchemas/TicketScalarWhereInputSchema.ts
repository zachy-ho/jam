import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { UuidFilterSchema } from './UuidFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';

export const TicketScalarWhereInputSchema: z.ZodType<Prisma.TicketScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TicketScalarWhereInputSchema),z.lazy(() => TicketScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TicketScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TicketScalarWhereInputSchema),z.lazy(() => TicketScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  jamId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  serialNumber: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  ticketConfigurationId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
}).strict();

export default TicketScalarWhereInputSchema;
