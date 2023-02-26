import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const JamOrganiserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.JamOrganiserUncheckedUpdateManyInput> = z.object({
  jamId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default JamOrganiserUncheckedUpdateManyInputSchema;
