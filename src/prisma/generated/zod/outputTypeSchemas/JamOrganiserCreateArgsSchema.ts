import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamOrganiserIncludeSchema } from '../inputTypeSchemas/JamOrganiserIncludeSchema'
import { JamOrganiserCreateInputSchema } from '../inputTypeSchemas/JamOrganiserCreateInputSchema'
import { JamOrganiserUncheckedCreateInputSchema } from '../inputTypeSchemas/JamOrganiserUncheckedCreateInputSchema'
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

export const JamOrganiserCreateArgsSchema: z.ZodType<Prisma.JamOrganiserCreateArgs> = z.object({
  select: JamOrganiserSelectSchema.optional(),
  include: JamOrganiserIncludeSchema.optional(),
  data: z.union([ JamOrganiserCreateInputSchema,JamOrganiserUncheckedCreateInputSchema ]),
}).strict()

export default JamOrganiserCreateArgsSchema;
