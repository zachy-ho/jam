import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamWhereInputSchema } from '../inputTypeSchemas/JamWhereInputSchema'
import { JamOrderByWithRelationInputSchema } from '../inputTypeSchemas/JamOrderByWithRelationInputSchema'
import { JamWhereUniqueInputSchema } from '../inputTypeSchemas/JamWhereUniqueInputSchema'

export const JamAggregateArgsSchema: z.ZodType<Prisma.JamAggregateArgs> = z.object({
  where: JamWhereInputSchema.optional(),
  orderBy: z.union([ JamOrderByWithRelationInputSchema.array(),JamOrderByWithRelationInputSchema ]).optional(),
  cursor: JamWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default JamAggregateArgsSchema;
