import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamOrganiserIncludeSchema } from '../inputTypeSchemas/JamOrganiserIncludeSchema'
import { JamOrganiserWhereInputSchema } from '../inputTypeSchemas/JamOrganiserWhereInputSchema'
import { JamOrganiserOrderByWithRelationInputSchema } from '../inputTypeSchemas/JamOrganiserOrderByWithRelationInputSchema'
import { JamOrganiserWhereUniqueInputSchema } from '../inputTypeSchemas/JamOrganiserWhereUniqueInputSchema'
import { JamOrganiserScalarFieldEnumSchema } from '../inputTypeSchemas/JamOrganiserScalarFieldEnumSchema'
import { JamArgsSchema } from "../outputTypeSchemas/JamArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const JamOrganiserSelectSchema: z.ZodType<Prisma.JamOrganiserSelect> = z.object({
  jam: z.union([z.boolean(),z.lazy(() => JamArgsSchema)]).optional(),
  jamId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  userId: z.boolean().optional(),
}).strict()

export const JamOrganiserFindFirstArgsSchema: z.ZodType<Prisma.JamOrganiserFindFirstArgs> = z.object({
  select: JamOrganiserSelectSchema.optional(),
  include: JamOrganiserIncludeSchema.optional(),
  where: JamOrganiserWhereInputSchema.optional(),
  orderBy: z.union([ JamOrganiserOrderByWithRelationInputSchema.array(),JamOrganiserOrderByWithRelationInputSchema ]).optional(),
  cursor: JamOrganiserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: JamOrganiserScalarFieldEnumSchema.array().optional(),
}).strict()

export default JamOrganiserFindFirstArgsSchema;
