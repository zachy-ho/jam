import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamArgsSchema } from "../outputTypeSchemas/JamArgsSchema"
import { TicketFindManyArgsSchema } from "../outputTypeSchemas/TicketFindManyArgsSchema"
import { TicketConfigurationCountOutputTypeArgsSchema } from "../outputTypeSchemas/TicketConfigurationCountOutputTypeArgsSchema"

export const TicketConfigurationIncludeSchema: z.ZodType<Prisma.TicketConfigurationInclude> = z.object({
  jam: z.union([z.boolean(),z.lazy(() => JamArgsSchema)]).optional(),
  tickets: z.union([z.boolean(),z.lazy(() => TicketFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TicketConfigurationCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default TicketConfigurationIncludeSchema;
