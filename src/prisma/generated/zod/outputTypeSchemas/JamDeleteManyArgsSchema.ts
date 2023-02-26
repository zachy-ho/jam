import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamWhereInputSchema } from '../inputTypeSchemas/JamWhereInputSchema'

export const JamDeleteManyArgsSchema: z.ZodType<Prisma.JamDeleteManyArgs> = z.object({
  where: JamWhereInputSchema.optional(),
}).strict()

export default JamDeleteManyArgsSchema;
