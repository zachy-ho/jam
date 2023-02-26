import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamCountOutputTypeSelectSchema } from './JamCountOutputTypeSelectSchema';

export const JamCountOutputTypeArgsSchema: z.ZodType<Prisma.JamCountOutputTypeArgs> = z.object({
  select: z.lazy(() => JamCountOutputTypeSelectSchema).nullish(),
}).strict();

export default JamCountOutputTypeSelectSchema;
