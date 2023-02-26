import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { UserUpdateOneRequiredWithoutOrganisedJamsNestedInputSchema } from './UserUpdateOneRequiredWithoutOrganisedJamsNestedInputSchema';

export const JamOrganiserUpdateWithoutJamInputSchema: z.ZodType<Prisma.JamOrganiserUpdateWithoutJamInput> = z.object({
  user: z.lazy(() => UserUpdateOneRequiredWithoutOrganisedJamsNestedInputSchema).optional(),
}).strict();

export default JamOrganiserUpdateWithoutJamInputSchema;
