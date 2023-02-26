import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const JamOrganiserUncheckedUpdateManyWithoutOrganisedJamsInputSchema: z.ZodType<Prisma.JamOrganiserUncheckedUpdateManyWithoutOrganisedJamsInput> = z.object({
  jamId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default JamOrganiserUncheckedUpdateManyWithoutOrganisedJamsInputSchema;
