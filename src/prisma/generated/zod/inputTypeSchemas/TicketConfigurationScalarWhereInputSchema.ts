import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';

export const TicketConfigurationScalarWhereInputSchema: z.ZodType<Prisma.TicketConfigurationScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TicketConfigurationScalarWhereInputSchema),z.lazy(() => TicketConfigurationScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TicketConfigurationScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TicketConfigurationScalarWhereInputSchema),z.lazy(() => TicketConfigurationScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  jamId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  price: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export default TicketConfigurationScalarWhereInputSchema;
