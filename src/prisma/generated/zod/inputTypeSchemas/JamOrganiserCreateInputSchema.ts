import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamCreateNestedOneWithoutOrganisersInputSchema } from './JamCreateNestedOneWithoutOrganisersInputSchema';
import { UserCreateNestedOneWithoutOrganisedJamsInputSchema } from './UserCreateNestedOneWithoutOrganisedJamsInputSchema';

export const JamOrganiserCreateInputSchema: z.ZodType<Prisma.JamOrganiserCreateInput> = z.object({
  jam: z.lazy(() => JamCreateNestedOneWithoutOrganisersInputSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutOrganisedJamsInputSchema),
}).strict();

export default JamOrganiserCreateInputSchema;
