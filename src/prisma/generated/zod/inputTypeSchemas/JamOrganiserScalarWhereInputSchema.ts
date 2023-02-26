import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { UuidFilterSchema } from './UuidFilterSchema';

export const JamOrganiserScalarWhereInputSchema: z.ZodType<Prisma.JamOrganiserScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => JamOrganiserScalarWhereInputSchema),z.lazy(() => JamOrganiserScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => JamOrganiserScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => JamOrganiserScalarWhereInputSchema),z.lazy(() => JamOrganiserScalarWhereInputSchema).array() ]).optional(),
  jamId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
}).strict();

export default JamOrganiserScalarWhereInputSchema;
