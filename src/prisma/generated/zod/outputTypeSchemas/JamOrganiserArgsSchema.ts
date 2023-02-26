import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamOrganiserSelectSchema } from '../inputTypeSchemas/JamOrganiserSelectSchema';
import { JamOrganiserIncludeSchema } from '../inputTypeSchemas/JamOrganiserIncludeSchema';

export const JamOrganiserArgsSchema: z.ZodType<Prisma.JamOrganiserArgs> = z.object({
  select: z.lazy(() => JamOrganiserSelectSchema).optional(),
  include: z.lazy(() => JamOrganiserIncludeSchema).optional(),
}).strict();

export default JamOrganiserArgsSchema;
