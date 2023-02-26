import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamIncludeSchema } from '../inputTypeSchemas/JamIncludeSchema'
import { JamWhereUniqueInputSchema } from '../inputTypeSchemas/JamWhereUniqueInputSchema'
import { JamCreateInputSchema } from '../inputTypeSchemas/JamCreateInputSchema'
import { JamUncheckedCreateInputSchema } from '../inputTypeSchemas/JamUncheckedCreateInputSchema'
import { JamUpdateInputSchema } from '../inputTypeSchemas/JamUpdateInputSchema'
import { JamUncheckedUpdateInputSchema } from '../inputTypeSchemas/JamUncheckedUpdateInputSchema'
import { TicketFindManyArgsSchema } from "../outputTypeSchemas/TicketFindManyArgsSchema"
import { TicketConfigurationFindManyArgsSchema } from "../outputTypeSchemas/TicketConfigurationFindManyArgsSchema"
import { JamOrganiserFindManyArgsSchema } from "../outputTypeSchemas/JamOrganiserFindManyArgsSchema"
import { JamCountOutputTypeArgsSchema } from "../outputTypeSchemas/JamCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const JamSelectSchema: z.ZodType<Prisma.JamSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  startDatetime: z.boolean().optional(),
  endDatetime: z.boolean().optional(),
  visibility: z.boolean().optional(),
  summary: z.boolean().optional(),
  description: z.boolean().optional(),
  venue: z.boolean().optional(),
  tickets: z.union([z.boolean(),z.lazy(() => TicketFindManyArgsSchema)]).optional(),
  ticketConfiguration: z.union([z.boolean(),z.lazy(() => TicketConfigurationFindManyArgsSchema)]).optional(),
  organisers: z.union([z.boolean(),z.lazy(() => JamOrganiserFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => JamCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const JamUpsertArgsSchema: z.ZodType<Prisma.JamUpsertArgs> = z.object({
  select: JamSelectSchema.optional(),
  include: JamIncludeSchema.optional(),
  where: JamWhereUniqueInputSchema,
  create: z.union([ JamCreateInputSchema,JamUncheckedCreateInputSchema ]),
  update: z.union([ JamUpdateInputSchema,JamUncheckedUpdateInputSchema ]),
}).strict()

export default JamUpsertArgsSchema;
