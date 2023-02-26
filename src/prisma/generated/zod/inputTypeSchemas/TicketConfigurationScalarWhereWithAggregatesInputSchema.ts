import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';

export const TicketConfigurationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TicketConfigurationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TicketConfigurationScalarWhereWithAggregatesInputSchema),z.lazy(() => TicketConfigurationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TicketConfigurationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TicketConfigurationScalarWhereWithAggregatesInputSchema),z.lazy(() => TicketConfigurationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  jamId: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  price: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export default TicketConfigurationScalarWhereWithAggregatesInputSchema;
