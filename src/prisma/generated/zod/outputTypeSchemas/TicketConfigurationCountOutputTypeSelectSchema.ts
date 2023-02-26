import { z } from 'zod';
import { type Prisma } from '@prisma/client';

export const TicketConfigurationCountOutputTypeSelectSchema: z.ZodType<Prisma.TicketConfigurationCountOutputTypeSelect> = z.object({
  tickets: z.boolean().optional(),
}).strict();

export default TicketConfigurationCountOutputTypeSelectSchema;
