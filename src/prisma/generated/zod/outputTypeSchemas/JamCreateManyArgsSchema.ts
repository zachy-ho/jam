import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamCreateManyInputSchema } from '../inputTypeSchemas/JamCreateManyInputSchema'

export const JamCreateManyArgsSchema: z.ZodType<Prisma.JamCreateManyArgs> = z.object({
  data: JamCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default JamCreateManyArgsSchema;
