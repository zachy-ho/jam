import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const JamOrganiserUncheckedUpdateWithoutJamInputSchema: z.ZodType<Prisma.JamOrganiserUncheckedUpdateWithoutJamInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default JamOrganiserUncheckedUpdateWithoutJamInputSchema;
