import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamOrganiserCreateWithoutUserInputSchema } from './JamOrganiserCreateWithoutUserInputSchema';
import { JamOrganiserUncheckedCreateWithoutUserInputSchema } from './JamOrganiserUncheckedCreateWithoutUserInputSchema';
import { JamOrganiserCreateOrConnectWithoutUserInputSchema } from './JamOrganiserCreateOrConnectWithoutUserInputSchema';
import { JamOrganiserCreateManyUserInputEnvelopeSchema } from './JamOrganiserCreateManyUserInputEnvelopeSchema';
import { JamOrganiserWhereUniqueInputSchema } from './JamOrganiserWhereUniqueInputSchema';

export const JamOrganiserUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.JamOrganiserUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => JamOrganiserCreateWithoutUserInputSchema),z.lazy(() => JamOrganiserCreateWithoutUserInputSchema).array(),z.lazy(() => JamOrganiserUncheckedCreateWithoutUserInputSchema),z.lazy(() => JamOrganiserUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => JamOrganiserCreateOrConnectWithoutUserInputSchema),z.lazy(() => JamOrganiserCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => JamOrganiserCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => JamOrganiserWhereUniqueInputSchema),z.lazy(() => JamOrganiserWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default JamOrganiserUncheckedCreateNestedManyWithoutUserInputSchema;
