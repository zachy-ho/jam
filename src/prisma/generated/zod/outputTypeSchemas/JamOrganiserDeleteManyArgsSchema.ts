import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamOrganiserWhereInputSchema } from '../inputTypeSchemas/JamOrganiserWhereInputSchema'

export const JamOrganiserDeleteManyArgsSchema: z.ZodType<Prisma.JamOrganiserDeleteManyArgs> = z.object({
  where: JamOrganiserWhereInputSchema.optional(),
}).strict()

export default JamOrganiserDeleteManyArgsSchema;
