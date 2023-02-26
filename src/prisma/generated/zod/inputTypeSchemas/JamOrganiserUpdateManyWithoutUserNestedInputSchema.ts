import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamOrganiserCreateWithoutUserInputSchema } from './JamOrganiserCreateWithoutUserInputSchema';
import { JamOrganiserUncheckedCreateWithoutUserInputSchema } from './JamOrganiserUncheckedCreateWithoutUserInputSchema';
import { JamOrganiserCreateOrConnectWithoutUserInputSchema } from './JamOrganiserCreateOrConnectWithoutUserInputSchema';
import { JamOrganiserUpsertWithWhereUniqueWithoutUserInputSchema } from './JamOrganiserUpsertWithWhereUniqueWithoutUserInputSchema';
import { JamOrganiserCreateManyUserInputEnvelopeSchema } from './JamOrganiserCreateManyUserInputEnvelopeSchema';
import { JamOrganiserWhereUniqueInputSchema } from './JamOrganiserWhereUniqueInputSchema';
import { JamOrganiserUpdateWithWhereUniqueWithoutUserInputSchema } from './JamOrganiserUpdateWithWhereUniqueWithoutUserInputSchema';
import { JamOrganiserUpdateManyWithWhereWithoutUserInputSchema } from './JamOrganiserUpdateManyWithWhereWithoutUserInputSchema';
import { JamOrganiserScalarWhereInputSchema } from './JamOrganiserScalarWhereInputSchema';

export const JamOrganiserUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.JamOrganiserUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => JamOrganiserCreateWithoutUserInputSchema),z.lazy(() => JamOrganiserCreateWithoutUserInputSchema).array(),z.lazy(() => JamOrganiserUncheckedCreateWithoutUserInputSchema),z.lazy(() => JamOrganiserUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => JamOrganiserCreateOrConnectWithoutUserInputSchema),z.lazy(() => JamOrganiserCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => JamOrganiserUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => JamOrganiserUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => JamOrganiserCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => JamOrganiserWhereUniqueInputSchema),z.lazy(() => JamOrganiserWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => JamOrganiserWhereUniqueInputSchema),z.lazy(() => JamOrganiserWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => JamOrganiserWhereUniqueInputSchema),z.lazy(() => JamOrganiserWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => JamOrganiserWhereUniqueInputSchema),z.lazy(() => JamOrganiserWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => JamOrganiserUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => JamOrganiserUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => JamOrganiserUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => JamOrganiserUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => JamOrganiserScalarWhereInputSchema),z.lazy(() => JamOrganiserScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default JamOrganiserUpdateManyWithoutUserNestedInputSchema;
