import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamOrganiserWhereUniqueInputSchema } from './JamOrganiserWhereUniqueInputSchema';
import { JamOrganiserUpdateWithoutJamInputSchema } from './JamOrganiserUpdateWithoutJamInputSchema';
import { JamOrganiserUncheckedUpdateWithoutJamInputSchema } from './JamOrganiserUncheckedUpdateWithoutJamInputSchema';

export const JamOrganiserUpdateWithWhereUniqueWithoutJamInputSchema: z.ZodType<Prisma.JamOrganiserUpdateWithWhereUniqueWithoutJamInput> = z.object({
  where: z.lazy(() => JamOrganiserWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => JamOrganiserUpdateWithoutJamInputSchema),z.lazy(() => JamOrganiserUncheckedUpdateWithoutJamInputSchema) ]),
}).strict();

export default JamOrganiserUpdateWithWhereUniqueWithoutJamInputSchema;
