import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamOrganiserWhereInputSchema } from '../inputTypeSchemas/JamOrganiserWhereInputSchema'
import { JamOrganiserOrderByWithAggregationInputSchema } from '../inputTypeSchemas/JamOrganiserOrderByWithAggregationInputSchema'
import { JamOrganiserScalarFieldEnumSchema } from '../inputTypeSchemas/JamOrganiserScalarFieldEnumSchema'
import { JamOrganiserScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/JamOrganiserScalarWhereWithAggregatesInputSchema'

export const JamOrganiserGroupByArgsSchema: z.ZodType<Prisma.JamOrganiserGroupByArgs> = z.object({
  where: JamOrganiserWhereInputSchema.optional(),
  orderBy: z.union([ JamOrganiserOrderByWithAggregationInputSchema.array(),JamOrganiserOrderByWithAggregationInputSchema ]).optional(),
  by: JamOrganiserScalarFieldEnumSchema.array(),
  having: JamOrganiserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default JamOrganiserGroupByArgsSchema;
