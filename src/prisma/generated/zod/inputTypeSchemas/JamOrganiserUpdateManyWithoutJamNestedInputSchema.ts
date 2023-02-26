import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamOrganiserCreateWithoutJamInputSchema } from './JamOrganiserCreateWithoutJamInputSchema';
import { JamOrganiserUncheckedCreateWithoutJamInputSchema } from './JamOrganiserUncheckedCreateWithoutJamInputSchema';
import { JamOrganiserCreateOrConnectWithoutJamInputSchema } from './JamOrganiserCreateOrConnectWithoutJamInputSchema';
import { JamOrganiserUpsertWithWhereUniqueWithoutJamInputSchema } from './JamOrganiserUpsertWithWhereUniqueWithoutJamInputSchema';
import { JamOrganiserCreateManyJamInputEnvelopeSchema } from './JamOrganiserCreateManyJamInputEnvelopeSchema';
import { JamOrganiserWhereUniqueInputSchema } from './JamOrganiserWhereUniqueInputSchema';
import { JamOrganiserUpdateWithWhereUniqueWithoutJamInputSchema } from './JamOrganiserUpdateWithWhereUniqueWithoutJamInputSchema';
import { JamOrganiserUpdateManyWithWhereWithoutJamInputSchema } from './JamOrganiserUpdateManyWithWhereWithoutJamInputSchema';
import { JamOrganiserScalarWhereInputSchema } from './JamOrganiserScalarWhereInputSchema';

export const JamOrganiserUpdateManyWithoutJamNestedInputSchema: z.ZodType<Prisma.JamOrganiserUpdateManyWithoutJamNestedInput> = z.object({
  create: z.union([ z.lazy(() => JamOrganiserCreateWithoutJamInputSchema),z.lazy(() => JamOrganiserCreateWithoutJamInputSchema).array(),z.lazy(() => JamOrganiserUncheckedCreateWithoutJamInputSchema),z.lazy(() => JamOrganiserUncheckedCreateWithoutJamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => JamOrganiserCreateOrConnectWithoutJamInputSchema),z.lazy(() => JamOrganiserCreateOrConnectWithoutJamInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => JamOrganiserUpsertWithWhereUniqueWithoutJamInputSchema),z.lazy(() => JamOrganiserUpsertWithWhereUniqueWithoutJamInputSchema).array() ]).optional(),
  createMany: z.lazy(() => JamOrganiserCreateManyJamInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => JamOrganiserWhereUniqueInputSchema),z.lazy(() => JamOrganiserWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => JamOrganiserWhereUniqueInputSchema),z.lazy(() => JamOrganiserWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => JamOrganiserWhereUniqueInputSchema),z.lazy(() => JamOrganiserWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => JamOrganiserWhereUniqueInputSchema),z.lazy(() => JamOrganiserWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => JamOrganiserUpdateWithWhereUniqueWithoutJamInputSchema),z.lazy(() => JamOrganiserUpdateWithWhereUniqueWithoutJamInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => JamOrganiserUpdateManyWithWhereWithoutJamInputSchema),z.lazy(() => JamOrganiserUpdateManyWithWhereWithoutJamInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => JamOrganiserScalarWhereInputSchema),z.lazy(() => JamOrganiserScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default JamOrganiserUpdateManyWithoutJamNestedInputSchema;
