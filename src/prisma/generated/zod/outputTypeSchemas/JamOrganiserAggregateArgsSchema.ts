import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamOrganiserWhereInputSchema } from '../inputTypeSchemas/JamOrganiserWhereInputSchema'
import { JamOrganiserOrderByWithRelationInputSchema } from '../inputTypeSchemas/JamOrganiserOrderByWithRelationInputSchema'
import { JamOrganiserWhereUniqueInputSchema } from '../inputTypeSchemas/JamOrganiserWhereUniqueInputSchema'

export const JamOrganiserAggregateArgsSchema: z.ZodType<Prisma.JamOrganiserAggregateArgs> = z.object({
  where: JamOrganiserWhereInputSchema.optional(),
  orderBy: z.union([ JamOrganiserOrderByWithRelationInputSchema.array(),JamOrganiserOrderByWithRelationInputSchema ]).optional(),
  cursor: JamOrganiserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default JamOrganiserAggregateArgsSchema;
