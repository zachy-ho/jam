import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamUpdateOneRequiredWithoutOrganisersNestedInputSchema } from './JamUpdateOneRequiredWithoutOrganisersNestedInputSchema';
import { UserUpdateOneRequiredWithoutOrganisedJamsNestedInputSchema } from './UserUpdateOneRequiredWithoutOrganisedJamsNestedInputSchema';

export const JamOrganiserUpdateInputSchema: z.ZodType<Prisma.JamOrganiserUpdateInput> = z.object({
  jam: z.lazy(() => JamUpdateOneRequiredWithoutOrganisersNestedInputSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutOrganisedJamsNestedInputSchema).optional(),
}).strict();

export default JamOrganiserUpdateInputSchema;
