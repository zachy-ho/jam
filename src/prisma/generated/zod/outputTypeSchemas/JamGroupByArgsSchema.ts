import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamWhereInputSchema } from '../inputTypeSchemas/JamWhereInputSchema'
import { JamOrderByWithAggregationInputSchema } from '../inputTypeSchemas/JamOrderByWithAggregationInputSchema'
import { JamScalarFieldEnumSchema } from '../inputTypeSchemas/JamScalarFieldEnumSchema'
import { JamScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/JamScalarWhereWithAggregatesInputSchema'

export const JamGroupByArgsSchema: z.ZodType<Prisma.JamGroupByArgs> = z.object({
  where: JamWhereInputSchema.optional(),
  orderBy: z.union([ JamOrderByWithAggregationInputSchema.array(),JamOrderByWithAggregationInputSchema ]).optional(),
  by: JamScalarFieldEnumSchema.array(),
  having: JamScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default JamGroupByArgsSchema;
