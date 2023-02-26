import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketIncludeSchema } from '../inputTypeSchemas/TicketIncludeSchema'
import { TicketWhereInputSchema } from '../inputTypeSchemas/TicketWhereInputSchema'
import { TicketOrderByWithRelationInputSchema } from '../inputTypeSchemas/TicketOrderByWithRelationInputSchema'
import { TicketWhereUniqueInputSchema } from '../inputTypeSchemas/TicketWhereUniqueInputSchema'
import { TicketScalarFieldEnumSchema } from '../inputTypeSchemas/TicketScalarFieldEnumSchema'
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

export const TicketFindManyArgsSchema: z.ZodType<Prisma.TicketFindManyArgs> = z.object({
  select: TicketSelectSchema.optional(),
  include: TicketIncludeSchema.optional(),
  where: TicketWhereInputSchema.optional(),
  orderBy: z.union([ TicketOrderByWithRelationInputSchema.array(),TicketOrderByWithRelationInputSchema ]).optional(),
  cursor: TicketWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: TicketScalarFieldEnumSchema.array().optional(),
}).strict()

export default TicketFindManyArgsSchema;
