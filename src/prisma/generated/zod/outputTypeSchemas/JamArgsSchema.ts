import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamSelectSchema } from '../inputTypeSchemas/JamSelectSchema';
import { JamIncludeSchema } from '../inputTypeSchemas/JamIncludeSchema';

export const JamArgsSchema: z.ZodType<Prisma.JamArgs> = z.object({
  select: z.lazy(() => JamSelectSchema).optional(),
  include: z.lazy(() => JamIncludeSchema).optional(),
}).strict();

export default JamArgsSchema;
