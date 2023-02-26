import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketUpdateManyMutationInputSchema } from '../inputTypeSchemas/TicketUpdateManyMutationInputSchema'
import { TicketUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TicketUncheckedUpdateManyInputSchema'
import { TicketWhereInputSchema } from '../inputTypeSchemas/TicketWhereInputSchema'

export const TicketUpdateManyArgsSchema: z.ZodType<Prisma.TicketUpdateManyArgs> = z.object({
  data: z.union([ TicketUpdateManyMutationInputSchema,TicketUncheckedUpdateManyInputSchema ]),
  where: TicketWhereInputSchema.optional(),
}).strict()

export default TicketUpdateManyArgsSchema;
