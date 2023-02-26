import { z } from 'zod';
import { type Prisma } from '@prisma/client';

export const TicketConfigurationJamIdNameCompoundUniqueInputSchema: z.ZodType<Prisma.TicketConfigurationJamIdNameCompoundUniqueInput> = z.object({
  jamId: z.string(),
  name: z.string(),
}).strict();

export default TicketConfigurationJamIdNameCompoundUniqueInputSchema;
