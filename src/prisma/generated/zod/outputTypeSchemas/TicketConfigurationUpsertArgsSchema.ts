import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketConfigurationIncludeSchema } from '../inputTypeSchemas/TicketConfigurationIncludeSchema'
import { TicketConfigurationWhereUniqueInputSchema } from '../inputTypeSchemas/TicketConfigurationWhereUniqueInputSchema'
import { TicketConfigurationCreateInputSchema } from '../inputTypeSchemas/TicketConfigurationCreateInputSchema'
import { TicketConfigurationUncheckedCreateInputSchema } from '../inputTypeSchemas/TicketConfigurationUncheckedCreateInputSchema'
import { TicketConfigurationUpdateInputSchema } from '../inputTypeSchemas/TicketConfigurationUpdateInputSchema'
import { TicketConfigurationUncheckedUpdateInputSchema } from '../inputTypeSchemas/TicketConfigurationUncheckedUpdateInputSchema'
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

export const TicketConfigurationUpsertArgsSchema: z.ZodType<Prisma.TicketConfigurationUpsertArgs> = z.object({
  select: TicketConfigurationSelectSchema.optional(),
  include: TicketConfigurationIncludeSchema.optional(),
  where: TicketConfigurationWhereUniqueInputSchema,
  create: z.union([ TicketConfigurationCreateInputSchema,TicketConfigurationUncheckedCreateInputSchema ]),
  update: z.union([ TicketConfigurationUpdateInputSchema,TicketConfigurationUncheckedUpdateInputSchema ]),
}).strict()

export default TicketConfigurationUpsertArgsSchema;
