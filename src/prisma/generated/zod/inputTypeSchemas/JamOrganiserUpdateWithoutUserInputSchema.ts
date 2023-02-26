import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamUpdateOneRequiredWithoutOrganisersNestedInputSchema } from './JamUpdateOneRequiredWithoutOrganisersNestedInputSchema';

export const JamOrganiserUpdateWithoutUserInputSchema: z.ZodType<Prisma.JamOrganiserUpdateWithoutUserInput> = z.object({
  jam: z.lazy(() => JamUpdateOneRequiredWithoutOrganisersNestedInputSchema).optional(),
}).strict();

export default JamOrganiserUpdateWithoutUserInputSchema;
