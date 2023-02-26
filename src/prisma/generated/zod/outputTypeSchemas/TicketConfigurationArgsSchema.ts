import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketConfigurationSelectSchema } from '../inputTypeSchemas/TicketConfigurationSelectSchema';
import { TicketConfigurationIncludeSchema } from '../inputTypeSchemas/TicketConfigurationIncludeSchema';

export const TicketConfigurationArgsSchema: z.ZodType<Prisma.TicketConfigurationArgs> = z.object({
  select: z.lazy(() => TicketConfigurationSelectSchema).optional(),
  include: z.lazy(() => TicketConfigurationIncludeSchema).optional(),
}).strict();

export default TicketConfigurationArgsSchema;
