import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketJamIdSerialNumberCompoundUniqueInputSchema } from './TicketJamIdSerialNumberCompoundUniqueInputSchema';

export const TicketWhereUniqueInputSchema: z.ZodType<Prisma.TicketWhereUniqueInput> = z.object({
  id: z.string().optional(),
  jamId_serialNumber: z.lazy(() => TicketJamIdSerialNumberCompoundUniqueInputSchema).optional(),
}).strict();

export default TicketWhereUniqueInputSchema;
