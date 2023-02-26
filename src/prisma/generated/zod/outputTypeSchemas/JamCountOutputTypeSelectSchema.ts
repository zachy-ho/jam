import { z } from 'zod';
import { type Prisma } from '@prisma/client';

export const JamCountOutputTypeSelectSchema: z.ZodType<Prisma.JamCountOutputTypeSelect> = z.object({
  tickets: z.boolean().optional(),
  ticketConfiguration: z.boolean().optional(),
  organisers: z.boolean().optional(),
}).strict();

export default JamCountOutputTypeSelectSchema;
