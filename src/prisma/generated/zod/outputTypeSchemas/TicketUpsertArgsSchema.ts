import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketIncludeSchema } from '../inputTypeSchemas/TicketIncludeSchema'
import { TicketWhereUniqueInputSchema } from '../inputTypeSchemas/TicketWhereUniqueInputSchema'
import { TicketCreateInputSchema } from '../inputTypeSchemas/TicketCreateInputSchema'
import { TicketUncheckedCreateInputSchema } from '../inputTypeSchemas/TicketUncheckedCreateInputSchema'
import { TicketUpdateInputSchema } from '../inputTypeSchemas/TicketUpdateInputSchema'
import { TicketUncheckedUpdateInputSchema } from '../inputTypeSchemas/TicketUncheckedUpdateInputSchema'
import { JamArgsSchema } from "../outputTypeSchemas/JamArgsSchema"
import { TicketConfigurationArgsSchema } from "../outputTypeSchemas/TicketConfigurationArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TicketSelectSchema: z.ZodType<Prisma.TicketSelect> = z.object({
  id: z.boolean().optional(),
  jam: z.union([z.boolean(),z.lazy(() => JamArgsSchema)]).optional(),
  jamId: z.boolean().optional(),
  serialNumber: z.boolean().optional(),
  ticketConfiguration: z.union([z.boolean(),z.lazy(() => TicketConfigurationArgsSchema)]).optional(),
  ticketConfigurationId: z.boolean().optional(),
}).strict()

export const TicketUpsertArgsSchema: z.ZodType<Prisma.TicketUpsertArgs> = z.object({
  select: TicketSelectSchema.optional(),
  include: TicketIncludeSchema.optional(),
  where: TicketWhereUniqueInputSchema,
  create: z.union([ TicketCreateInputSchema,TicketUncheckedCreateInputSchema ]),
  update: z.union([ TicketUpdateInputSchema,TicketUncheckedUpdateInputSchema ]),
}).strict()

export default TicketUpsertArgsSchema;
