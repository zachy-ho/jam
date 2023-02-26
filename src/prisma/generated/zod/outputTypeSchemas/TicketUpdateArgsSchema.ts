import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketIncludeSchema } from '../inputTypeSchemas/TicketIncludeSchema'
import { TicketUpdateInputSchema } from '../inputTypeSchemas/TicketUpdateInputSchema'
import { TicketUncheckedUpdateInputSchema } from '../inputTypeSchemas/TicketUncheckedUpdateInputSchema'
import { TicketWhereUniqueInputSchema } from '../inputTypeSchemas/TicketWhereUniqueInputSchema'
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

export const TicketUpdateArgsSchema: z.ZodType<Prisma.TicketUpdateArgs> = z.object({
  select: TicketSelectSchema.optional(),
  include: TicketIncludeSchema.optional(),
  data: z.union([ TicketUpdateInputSchema,TicketUncheckedUpdateInputSchema ]),
  where: TicketWhereUniqueInputSchema,
}).strict()

export default TicketUpdateArgsSchema;
