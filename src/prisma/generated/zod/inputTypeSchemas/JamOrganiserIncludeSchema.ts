import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamArgsSchema } from "../outputTypeSchemas/JamArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"

export const JamOrganiserIncludeSchema: z.ZodType<Prisma.JamOrganiserInclude> = z.object({
  jam: z.union([z.boolean(),z.lazy(() => JamArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export default JamOrganiserIncludeSchema;
