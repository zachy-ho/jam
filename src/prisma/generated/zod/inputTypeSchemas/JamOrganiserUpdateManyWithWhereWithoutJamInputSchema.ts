import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamOrganiserScalarWhereInputSchema } from './JamOrganiserScalarWhereInputSchema';
import { JamOrganiserUpdateManyMutationInputSchema } from './JamOrganiserUpdateManyMutationInputSchema';
import { JamOrganiserUncheckedUpdateManyWithoutOrganisersInputSchema } from './JamOrganiserUncheckedUpdateManyWithoutOrganisersInputSchema';

export const JamOrganiserUpdateManyWithWhereWithoutJamInputSchema: z.ZodType<Prisma.JamOrganiserUpdateManyWithWhereWithoutJamInput> = z.object({
  where: z.lazy(() => JamOrganiserScalarWhereInputSchema),
  data: z.union([ z.lazy(() => JamOrganiserUpdateManyMutationInputSchema),z.lazy(() => JamOrganiserUncheckedUpdateManyWithoutOrganisersInputSchema) ]),
}).strict();

export default JamOrganiserUpdateManyWithWhereWithoutJamInputSchema;
