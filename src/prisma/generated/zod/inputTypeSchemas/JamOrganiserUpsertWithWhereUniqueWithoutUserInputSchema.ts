import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamOrganiserWhereUniqueInputSchema } from './JamOrganiserWhereUniqueInputSchema';
import { JamOrganiserUpdateWithoutUserInputSchema } from './JamOrganiserUpdateWithoutUserInputSchema';
import { JamOrganiserUncheckedUpdateWithoutUserInputSchema } from './JamOrganiserUncheckedUpdateWithoutUserInputSchema';
import { JamOrganiserCreateWithoutUserInputSchema } from './JamOrganiserCreateWithoutUserInputSchema';
import { JamOrganiserUncheckedCreateWithoutUserInputSchema } from './JamOrganiserUncheckedCreateWithoutUserInputSchema';

export const JamOrganiserUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.JamOrganiserUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => JamOrganiserWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => JamOrganiserUpdateWithoutUserInputSchema),z.lazy(() => JamOrganiserUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => JamOrganiserCreateWithoutUserInputSchema),z.lazy(() => JamOrganiserUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default JamOrganiserUpsertWithWhereUniqueWithoutUserInputSchema;
