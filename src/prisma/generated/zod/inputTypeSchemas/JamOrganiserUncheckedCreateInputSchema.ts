import { z } from 'zod';
import { type Prisma } from '@prisma/client';

export const JamOrganiserUncheckedCreateInputSchema: z.ZodType<Prisma.JamOrganiserUncheckedCreateInput> = z.object({
  jamId: z.string(),
  userId: z.string(),
}).strict();

export default JamOrganiserUncheckedCreateInputSchema;
