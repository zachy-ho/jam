import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { UuidFilterSchema } from './UuidFilterSchema';
import { JamRelationFilterSchema } from './JamRelationFilterSchema';
import { JamWhereInputSchema } from './JamWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { TicketConfigurationRelationFilterSchema } from './TicketConfigurationRelationFilterSchema';
import { TicketConfigurationWhereInputSchema } from './TicketConfigurationWhereInputSchema';

export const TicketWhereInputSchema: z.ZodType<Prisma.TicketWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TicketWhereInputSchema),z.lazy(() => TicketWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TicketWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TicketWhereInputSchema),z.lazy(() => TicketWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  jam: z.union([ z.lazy(() => JamRelationFilterSchema),z.lazy(() => JamWhereInputSchema) ]).optional(),
  jamId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  serialNumber: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  ticketConfiguration: z.union([ z.lazy(() => TicketConfigurationRelationFilterSchema),z.lazy(() => TicketConfigurationWhereInputSchema) ]).optional(),
  ticketConfigurationId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
}).strict();

export default TicketWhereInputSchema;
