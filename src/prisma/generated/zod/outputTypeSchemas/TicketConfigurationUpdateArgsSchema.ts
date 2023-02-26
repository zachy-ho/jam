import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketConfigurationIncludeSchema } from '../inputTypeSchemas/TicketConfigurationIncludeSchema'
import { TicketConfigurationUpdateInputSchema } from '../inputTypeSchemas/TicketConfigurationUpdateInputSchema'
import { TicketConfigurationUncheckedUpdateInputSchema } from '../inputTypeSchemas/TicketConfigurationUncheckedUpdateInputSchema'
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

export const TicketConfigurationUpdateArgsSchema: z.ZodType<Prisma.TicketConfigurationUpdateArgs> = z.object({
  select: TicketConfigurationSelectSchema.optional(),
  include: TicketConfigurationIncludeSchema.optional(),
  data: z.union([ TicketConfigurationUpdateInputSchema,TicketConfigurationUncheckedUpdateInputSchema ]),
  where: TicketConfigurationWhereUniqueInputSchema,
}).strict()

export default TicketConfigurationUpdateArgsSchema;
