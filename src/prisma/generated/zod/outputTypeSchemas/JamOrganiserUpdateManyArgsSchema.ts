import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamOrganiserUpdateManyMutationInputSchema } from '../inputTypeSchemas/JamOrganiserUpdateManyMutationInputSchema'
import { JamOrganiserUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/JamOrganiserUncheckedUpdateManyInputSchema'
import { JamOrganiserWhereInputSchema } from '../inputTypeSchemas/JamOrganiserWhereInputSchema'

export const JamOrganiserUpdateManyArgsSchema: z.ZodType<Prisma.JamOrganiserUpdateManyArgs> = z.object({
  data: z.union([ JamOrganiserUpdateManyMutationInputSchema,JamOrganiserUncheckedUpdateManyInputSchema ]),
  where: JamOrganiserWhereInputSchema.optional(),
}).strict()

export default JamOrganiserUpdateManyArgsSchema;
