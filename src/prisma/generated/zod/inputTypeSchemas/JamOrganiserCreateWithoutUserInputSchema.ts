import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamCreateNestedOneWithoutOrganisersInputSchema } from './JamCreateNestedOneWithoutOrganisersInputSchema';

export const JamOrganiserCreateWithoutUserInputSchema: z.ZodType<Prisma.JamOrganiserCreateWithoutUserInput> = z.object({
  jam: z.lazy(() => JamCreateNestedOneWithoutOrganisersInputSchema),
}).strict();

export default JamOrganiserCreateWithoutUserInputSchema;
