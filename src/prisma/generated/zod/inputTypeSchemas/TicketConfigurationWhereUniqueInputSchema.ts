import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketConfigurationJamIdNameCompoundUniqueInputSchema } from './TicketConfigurationJamIdNameCompoundUniqueInputSchema';

export const TicketConfigurationWhereUniqueInputSchema: z.ZodType<Prisma.TicketConfigurationWhereUniqueInput> = z.object({
  id: z.string().optional(),
  jamId_name: z.lazy(() => TicketConfigurationJamIdNameCompoundUniqueInputSchema).optional(),
}).strict();

export default TicketConfigurationWhereUniqueInputSchema;
