import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamOrganiserCreateManyInputSchema } from '../inputTypeSchemas/JamOrganiserCreateManyInputSchema'

export const JamOrganiserCreateManyArgsSchema: z.ZodType<Prisma.JamOrganiserCreateManyArgs> = z.object({
  data: JamOrganiserCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default JamOrganiserCreateManyArgsSchema;
