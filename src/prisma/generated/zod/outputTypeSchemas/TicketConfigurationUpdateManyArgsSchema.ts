import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketConfigurationUpdateManyMutationInputSchema } from '../inputTypeSchemas/TicketConfigurationUpdateManyMutationInputSchema'
import { TicketConfigurationUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TicketConfigurationUncheckedUpdateManyInputSchema'
import { TicketConfigurationWhereInputSchema } from '../inputTypeSchemas/TicketConfigurationWhereInputSchema'

export const TicketConfigurationUpdateManyArgsSchema: z.ZodType<Prisma.TicketConfigurationUpdateManyArgs> = z.object({
  data: z.union([ TicketConfigurationUpdateManyMutationInputSchema,TicketConfigurationUncheckedUpdateManyInputSchema ]),
  where: TicketConfigurationWhereInputSchema.optional(),
}).strict()

export default TicketConfigurationUpdateManyArgsSchema;
