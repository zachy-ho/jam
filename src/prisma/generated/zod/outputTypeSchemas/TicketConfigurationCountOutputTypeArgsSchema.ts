import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketConfigurationCountOutputTypeSelectSchema } from './TicketConfigurationCountOutputTypeSelectSchema';

export const TicketConfigurationCountOutputTypeArgsSchema: z.ZodType<Prisma.TicketConfigurationCountOutputTypeArgs> = z.object({
  select: z.lazy(() => TicketConfigurationCountOutputTypeSelectSchema).nullish(),
}).strict();

export default TicketConfigurationCountOutputTypeSelectSchema;
