import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamOrganiserScalarWhereInputSchema } from './JamOrganiserScalarWhereInputSchema';
import { JamOrganiserUpdateManyMutationInputSchema } from './JamOrganiserUpdateManyMutationInputSchema';
import { JamOrganiserUncheckedUpdateManyWithoutOrganisedJamsInputSchema } from './JamOrganiserUncheckedUpdateManyWithoutOrganisedJamsInputSchema';

export const JamOrganiserUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.JamOrganiserUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => JamOrganiserScalarWhereInputSchema),
  data: z.union([ z.lazy(() => JamOrganiserUpdateManyMutationInputSchema),z.lazy(() => JamOrganiserUncheckedUpdateManyWithoutOrganisedJamsInputSchema) ]),
}).strict();

export default JamOrganiserUpdateManyWithWhereWithoutUserInputSchema;
