import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutOrganisedJamsInputSchema } from './UserCreateNestedOneWithoutOrganisedJamsInputSchema';

export const JamOrganiserCreateWithoutJamInputSchema: z.ZodType<Prisma.JamOrganiserCreateWithoutJamInput> = z.object({
  user: z.lazy(() => UserCreateNestedOneWithoutOrganisedJamsInputSchema),
}).strict();

export default JamOrganiserCreateWithoutJamInputSchema;
