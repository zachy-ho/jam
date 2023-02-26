import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamArgsSchema } from "../outputTypeSchemas/JamArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"

export const JamOrganiserSelectSchema: z.ZodType<Prisma.JamOrganiserSelect> = z.object({
  jam: z.union([z.boolean(),z.lazy(() => JamArgsSchema)]).optional(),
  jamId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  userId: z.boolean().optional(),
}).strict()

export default JamOrganiserSelectSchema;
