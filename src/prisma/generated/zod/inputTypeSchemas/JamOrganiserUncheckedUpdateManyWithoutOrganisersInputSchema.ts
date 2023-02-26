import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const JamOrganiserUncheckedUpdateManyWithoutOrganisersInputSchema: z.ZodType<Prisma.JamOrganiserUncheckedUpdateManyWithoutOrganisersInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default JamOrganiserUncheckedUpdateManyWithoutOrganisersInputSchema;
