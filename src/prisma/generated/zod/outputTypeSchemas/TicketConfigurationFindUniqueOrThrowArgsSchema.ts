import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketConfigurationIncludeSchema } from '../inputTypeSchemas/TicketConfigurationIncludeSchema'
import { TicketConfigurationWhereUniqueInputSchema } from '../inputTypeSchemas/TicketConfigurationWhereUniqueInputSchema'
import { JamArgsSchema } from "../outputTypeSchemas/JamArgsSchema"
import { TicketFindManyArgsSchema } from "../outputTypeSchemas/TicketFindManyArgsSchema"
import { TicketConfigurationCountOutputTypeArgsSchema } from "../outputTypeSchemas/TicketConfigurationCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TicketConfigurationSelectSchema: z.ZodType<Prisma.TicketConfigurationSelect> = z.object({
  id: z.boolean().optional(),
  jam: z.union([z.boolean(),z.lazy(() => JamArgsSchema)]).optional(),
  jamId: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  price: z.boolean().optional(),
  tickets: z.union([z.boolean(),z.lazy(() => TicketFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TicketConfigurationCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TicketConfigurationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TicketConfigurationFindUniqueOrThrowArgs> = z.object({
  select: TicketConfigurationSelectSchema.optional(),
  include: TicketConfigurationIncludeSchema.optional(),
  where: TicketConfigurationWhereUniqueInputSchema,
}).strict()

export default TicketConfigurationFindUniqueOrThrowArgsSchema;
