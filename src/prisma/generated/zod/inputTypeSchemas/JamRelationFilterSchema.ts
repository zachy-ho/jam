import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamWhereInputSchema } from './JamWhereInputSchema';

export const JamRelationFilterSchema: z.ZodType<Prisma.JamRelationFilter> = z.object({
  is: z.lazy(() => JamWhereInputSchema).optional(),
  isNot: z.lazy(() => JamWhereInputSchema).optional(),
}).strict();

export default JamRelationFilterSchema;
