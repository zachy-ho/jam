import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketConfigurationWhereInputSchema } from '../inputTypeSchemas/TicketConfigurationWhereInputSchema'

export const TicketConfigurationDeleteManyArgsSchema: z.ZodType<Prisma.TicketConfigurationDeleteManyArgs> = z.object({
  where: TicketConfigurationWhereInputSchema.optional(),
}).strict()

export default TicketConfigurationDeleteManyArgsSchema;
