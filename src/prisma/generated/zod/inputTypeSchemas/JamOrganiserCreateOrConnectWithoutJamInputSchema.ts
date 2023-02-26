import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamOrganiserWhereUniqueInputSchema } from './JamOrganiserWhereUniqueInputSchema';
import { JamOrganiserCreateWithoutJamInputSchema } from './JamOrganiserCreateWithoutJamInputSchema';
import { JamOrganiserUncheckedCreateWithoutJamInputSchema } from './JamOrganiserUncheckedCreateWithoutJamInputSchema';

export const JamOrganiserCreateOrConnectWithoutJamInputSchema: z.ZodType<Prisma.JamOrganiserCreateOrConnectWithoutJamInput> = z.object({
  where: z.lazy(() => JamOrganiserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => JamOrganiserCreateWithoutJamInputSchema),z.lazy(() => JamOrganiserUncheckedCreateWithoutJamInputSchema) ]),
}).strict();

export default JamOrganiserCreateOrConnectWithoutJamInputSchema;
