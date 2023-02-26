import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamOrganiserCreateWithoutJamInputSchema } from './JamOrganiserCreateWithoutJamInputSchema';
import { JamOrganiserUncheckedCreateWithoutJamInputSchema } from './JamOrganiserUncheckedCreateWithoutJamInputSchema';
import { JamOrganiserCreateOrConnectWithoutJamInputSchema } from './JamOrganiserCreateOrConnectWithoutJamInputSchema';
import { JamOrganiserCreateManyJamInputEnvelopeSchema } from './JamOrganiserCreateManyJamInputEnvelopeSchema';
import { JamOrganiserWhereUniqueInputSchema } from './JamOrganiserWhereUniqueInputSchema';

export const JamOrganiserUncheckedCreateNestedManyWithoutJamInputSchema: z.ZodType<Prisma.JamOrganiserUncheckedCreateNestedManyWithoutJamInput> = z.object({
  create: z.union([ z.lazy(() => JamOrganiserCreateWithoutJamInputSchema),z.lazy(() => JamOrganiserCreateWithoutJamInputSchema).array(),z.lazy(() => JamOrganiserUncheckedCreateWithoutJamInputSchema),z.lazy(() => JamOrganiserUncheckedCreateWithoutJamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => JamOrganiserCreateOrConnectWithoutJamInputSchema),z.lazy(() => JamOrganiserCreateOrConnectWithoutJamInputSchema).array() ]).optional(),
  createMany: z.lazy(() => JamOrganiserCreateManyJamInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => JamOrganiserWhereUniqueInputSchema),z.lazy(() => JamOrganiserWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default JamOrganiserUncheckedCreateNestedManyWithoutJamInputSchema;
