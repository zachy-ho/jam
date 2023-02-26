import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketFindManyArgsSchema } from "../outputTypeSchemas/TicketFindManyArgsSchema"
import { TicketConfigurationFindManyArgsSchema } from "../outputTypeSchemas/TicketConfigurationFindManyArgsSchema"
import { JamOrganiserFindManyArgsSchema } from "../outputTypeSchemas/JamOrganiserFindManyArgsSchema"
import { JamCountOutputTypeArgsSchema } from "../outputTypeSchemas/JamCountOutputTypeArgsSchema"

export const JamIncludeSchema: z.ZodType<Prisma.JamInclude> = z.object({
  tickets: z.union([z.boolean(),z.lazy(() => TicketFindManyArgsSchema)]).optional(),
  ticketConfiguration: z.union([z.boolean(),z.lazy(() => TicketConfigurationFindManyArgsSchema)]).optional(),
  organisers: z.union([z.boolean(),z.lazy(() => JamOrganiserFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => JamCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default JamIncludeSchema;
