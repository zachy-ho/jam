import { z } from 'zod';
import { type Prisma } from '@prisma/client';

export const JamOrganiserUncheckedCreateWithoutJamInputSchema: z.ZodType<Prisma.JamOrganiserUncheckedCreateWithoutJamInput> = z.object({
  userId: z.string(),
}).strict();

export default JamOrganiserUncheckedCreateWithoutJamInputSchema;
