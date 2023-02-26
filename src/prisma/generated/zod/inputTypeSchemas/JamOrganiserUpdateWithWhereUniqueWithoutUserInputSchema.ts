import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamOrganiserWhereUniqueInputSchema } from './JamOrganiserWhereUniqueInputSchema';
import { JamOrganiserUpdateWithoutUserInputSchema } from './JamOrganiserUpdateWithoutUserInputSchema';
import { JamOrganiserUncheckedUpdateWithoutUserInputSchema } from './JamOrganiserUncheckedUpdateWithoutUserInputSchema';

export const JamOrganiserUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.JamOrganiserUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => JamOrganiserWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => JamOrganiserUpdateWithoutUserInputSchema),z.lazy(() => JamOrganiserUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default JamOrganiserUpdateWithWhereUniqueWithoutUserInputSchema;
