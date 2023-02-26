import { z } from 'zod';
import { type Prisma } from '@prisma/client';

export const JamOrganiserUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.JamOrganiserUncheckedCreateWithoutUserInput> = z.object({
  jamId: z.string(),
}).strict();

export default JamOrganiserUncheckedCreateWithoutUserInputSchema;
