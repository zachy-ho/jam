import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketConfigurationCreateManyInputSchema } from '../inputTypeSchemas/TicketConfigurationCreateManyInputSchema'

export const TicketConfigurationCreateManyArgsSchema: z.ZodType<Prisma.TicketConfigurationCreateManyArgs> = z.object({
  data: TicketConfigurationCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default TicketConfigurationCreateManyArgsSchema;
