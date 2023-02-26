import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { UuidFilterSchema } from './UuidFilterSchema';
import { JamRelationFilterSchema } from './JamRelationFilterSchema';
import { JamWhereInputSchema } from './JamWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { TicketListRelationFilterSchema } from './TicketListRelationFilterSchema';

export const TicketConfigurationWhereInputSchema: z.ZodType<Prisma.TicketConfigurationWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TicketConfigurationWhereInputSchema),z.lazy(() => TicketConfigurationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TicketConfigurationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TicketConfigurationWhereInputSchema),z.lazy(() => TicketConfigurationWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  jam: z.union([ z.lazy(() => JamRelationFilterSchema),z.lazy(() => JamWhereInputSchema) ]).optional(),
  jamId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  price: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  tickets: z.lazy(() => TicketListRelationFilterSchema).optional(),
}).strict();

export default TicketConfigurationWhereInputSchema;
