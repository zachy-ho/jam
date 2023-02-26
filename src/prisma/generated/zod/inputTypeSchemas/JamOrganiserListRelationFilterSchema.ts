import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamOrganiserWhereInputSchema } from './JamOrganiserWhereInputSchema';

export const JamOrganiserListRelationFilterSchema: z.ZodType<Prisma.JamOrganiserListRelationFilter> = z.object({
  every: z.lazy(() => JamOrganiserWhereInputSchema).optional(),
  some: z.lazy(() => JamOrganiserWhereInputSchema).optional(),
  none: z.lazy(() => JamOrganiserWhereInputSchema).optional(),
}).strict();

export default JamOrganiserListRelationFilterSchema;
