import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamRelationFilterSchema } from './JamRelationFilterSchema';
import { JamWhereInputSchema } from './JamWhereInputSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const JamOrganiserWhereInputSchema: z.ZodType<Prisma.JamOrganiserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => JamOrganiserWhereInputSchema),z.lazy(() => JamOrganiserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => JamOrganiserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => JamOrganiserWhereInputSchema),z.lazy(() => JamOrganiserWhereInputSchema).array() ]).optional(),
  jam: z.union([ z.lazy(() => JamRelationFilterSchema),z.lazy(() => JamWhereInputSchema) ]).optional(),
  jamId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  userId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
}).strict();

export default JamOrganiserWhereInputSchema;
