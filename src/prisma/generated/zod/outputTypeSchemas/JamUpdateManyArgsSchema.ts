import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamUpdateManyMutationInputSchema } from '../inputTypeSchemas/JamUpdateManyMutationInputSchema'
import { JamUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/JamUncheckedUpdateManyInputSchema'
import { JamWhereInputSchema } from '../inputTypeSchemas/JamWhereInputSchema'

export const JamUpdateManyArgsSchema: z.ZodType<Prisma.JamUpdateManyArgs> = z.object({
  data: z.union([ JamUpdateManyMutationInputSchema,JamUncheckedUpdateManyInputSchema ]),
  where: JamWhereInputSchema.optional(),
}).strict()

export default JamUpdateManyArgsSchema;
