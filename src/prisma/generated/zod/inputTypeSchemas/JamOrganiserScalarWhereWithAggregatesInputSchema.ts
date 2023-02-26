import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';

export const JamOrganiserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.JamOrganiserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => JamOrganiserScalarWhereWithAggregatesInputSchema),z.lazy(() => JamOrganiserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => JamOrganiserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => JamOrganiserScalarWhereWithAggregatesInputSchema),z.lazy(() => JamOrganiserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  jamId: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default JamOrganiserScalarWhereWithAggregatesInputSchema;
