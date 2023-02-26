import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketConfigurationWhereInputSchema } from '../inputTypeSchemas/TicketConfigurationWhereInputSchema'
import { TicketConfigurationOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TicketConfigurationOrderByWithAggregationInputSchema'
import { TicketConfigurationScalarFieldEnumSchema } from '../inputTypeSchemas/TicketConfigurationScalarFieldEnumSchema'
import { TicketConfigurationScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TicketConfigurationScalarWhereWithAggregatesInputSchema'

export const TicketConfigurationGroupByArgsSchema: z.ZodType<Prisma.TicketConfigurationGroupByArgs> = z.object({
  where: TicketConfigurationWhereInputSchema.optional(),
  orderBy: z.union([ TicketConfigurationOrderByWithAggregationInputSchema.array(),TicketConfigurationOrderByWithAggregationInputSchema ]).optional(),
  by: TicketConfigurationScalarFieldEnumSchema.array(),
  having: TicketConfigurationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default TicketConfigurationGroupByArgsSchema;
