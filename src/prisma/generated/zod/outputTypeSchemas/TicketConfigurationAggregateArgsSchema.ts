import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketConfigurationWhereInputSchema } from '../inputTypeSchemas/TicketConfigurationWhereInputSchema'
import { TicketConfigurationOrderByWithRelationInputSchema } from '../inputTypeSchemas/TicketConfigurationOrderByWithRelationInputSchema'
import { TicketConfigurationWhereUniqueInputSchema } from '../inputTypeSchemas/TicketConfigurationWhereUniqueInputSchema'

export const TicketConfigurationAggregateArgsSchema: z.ZodType<Prisma.TicketConfigurationAggregateArgs> = z.object({
  where: TicketConfigurationWhereInputSchema.optional(),
  orderBy: z.union([ TicketConfigurationOrderByWithRelationInputSchema.array(),TicketConfigurationOrderByWithRelationInputSchema ]).optional(),
  cursor: TicketConfigurationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default TicketConfigurationAggregateArgsSchema;
