import { z } from 'zod';
import { type Prisma } from '@prisma/client';

export const TicketJamIdSerialNumberCompoundUniqueInputSchema: z.ZodType<Prisma.TicketJamIdSerialNumberCompoundUniqueInput> = z.object({
  jamId: z.string(),
  serialNumber: z.number(),
}).strict();

export default TicketJamIdSerialNumberCompoundUniqueInputSchema;
