import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const JamOrganiserUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.JamOrganiserUncheckedUpdateWithoutUserInput> = z.object({
  jamId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default JamOrganiserUncheckedUpdateWithoutUserInputSchema;
