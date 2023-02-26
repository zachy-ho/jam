import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamArgsSchema } from "../outputTypeSchemas/JamArgsSchema"
import { TicketConfigurationArgsSchema } from "../outputTypeSchemas/TicketConfigurationArgsSchema"

export const TicketIncludeSchema: z.ZodType<Prisma.TicketInclude> = z.object({
  jam: z.union([z.boolean(),z.lazy(() => JamArgsSchema)]).optional(),
  ticketConfiguration: z.union([z.boolean(),z.lazy(() => TicketConfigurationArgsSchema)]).optional(),
}).strict()

export default TicketIncludeSchema;
