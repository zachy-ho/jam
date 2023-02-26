import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamOrganiserWhereUniqueInputSchema } from './JamOrganiserWhereUniqueInputSchema';
import { JamOrganiserCreateWithoutUserInputSchema } from './JamOrganiserCreateWithoutUserInputSchema';
import { JamOrganiserUncheckedCreateWithoutUserInputSchema } from './JamOrganiserUncheckedCreateWithoutUserInputSchema';

export const JamOrganiserCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.JamOrganiserCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => JamOrganiserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => JamOrganiserCreateWithoutUserInputSchema),z.lazy(() => JamOrganiserUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default JamOrganiserCreateOrConnectWithoutUserInputSchema;
