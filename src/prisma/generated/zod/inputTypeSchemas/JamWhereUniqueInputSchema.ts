import { z } from 'zod';
import { type Prisma } from '@prisma/client';

export const JamWhereUniqueInputSchema: z.ZodType<Prisma.JamWhereUniqueInput> = z.object({
  id: z.string().optional(),
}).strict();

export default JamWhereUniqueInputSchema;
