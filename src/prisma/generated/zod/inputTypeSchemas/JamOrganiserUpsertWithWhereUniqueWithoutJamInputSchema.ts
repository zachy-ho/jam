import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamOrganiserWhereUniqueInputSchema } from './JamOrganiserWhereUniqueInputSchema';
import { JamOrganiserUpdateWithoutJamInputSchema } from './JamOrganiserUpdateWithoutJamInputSchema';
import { JamOrganiserUncheckedUpdateWithoutJamInputSchema } from './JamOrganiserUncheckedUpdateWithoutJamInputSchema';
import { JamOrganiserCreateWithoutJamInputSchema } from './JamOrganiserCreateWithoutJamInputSchema';
import { JamOrganiserUncheckedCreateWithoutJamInputSchema } from './JamOrganiserUncheckedCreateWithoutJamInputSchema';

export const JamOrganiserUpsertWithWhereUniqueWithoutJamInputSchema: z.ZodType<Prisma.JamOrganiserUpsertWithWhereUniqueWithoutJamInput> = z.object({
  where: z.lazy(() => JamOrganiserWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => JamOrganiserUpdateWithoutJamInputSchema),z.lazy(() => JamOrganiserUncheckedUpdateWithoutJamInputSchema) ]),
  create: z.union([ z.lazy(() => JamOrganiserCreateWithoutJamInputSchema),z.lazy(() => JamOrganiserUncheckedCreateWithoutJamInputSchema) ]),
}).strict();

export default JamOrganiserUpsertWithWhereUniqueWithoutJamInputSchema;
