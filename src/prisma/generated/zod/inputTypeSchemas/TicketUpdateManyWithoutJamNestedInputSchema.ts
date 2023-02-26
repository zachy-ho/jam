import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketCreateWithoutJamInputSchema } from './TicketCreateWithoutJamInputSchema';
import { TicketUncheckedCreateWithoutJamInputSchema } from './TicketUncheckedCreateWithoutJamInputSchema';
import { TicketCreateOrConnectWithoutJamInputSchema } from './TicketCreateOrConnectWithoutJamInputSchema';
import { TicketUpsertWithWhereUniqueWithoutJamInputSchema } from './TicketUpsertWithWhereUniqueWithoutJamInputSchema';
import { TicketCreateManyJamInputEnvelopeSchema } from './TicketCreateManyJamInputEnvelopeSchema';
import { TicketWhereUniqueInputSchema } from './TicketWhereUniqueInputSchema';
import { TicketUpdateWithWhereUniqueWithoutJamInputSchema } from './TicketUpdateWithWhereUniqueWithoutJamInputSchema';
import { TicketUpdateManyWithWhereWithoutJamInputSchema } from './TicketUpdateManyWithWhereWithoutJamInputSchema';
import { TicketScalarWhereInputSchema } from './TicketScalarWhereInputSchema';

export const TicketUpdateManyWithoutJamNestedInputSchema: z.ZodType<Prisma.TicketUpdateManyWithoutJamNestedInput> = z.object({
  create: z.union([ z.lazy(() => TicketCreateWithoutJamInputSchema),z.lazy(() => TicketCreateWithoutJamInputSchema).array(),z.lazy(() => TicketUncheckedCreateWithoutJamInputSchema),z.lazy(() => TicketUncheckedCreateWithoutJamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TicketCreateOrConnectWithoutJamInputSchema),z.lazy(() => TicketCreateOrConnectWithoutJamInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TicketUpsertWithWhereUniqueWithoutJamInputSchema),z.lazy(() => TicketUpsertWithWhereUniqueWithoutJamInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TicketCreateManyJamInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TicketWhereUniqueInputSchema),z.lazy(() => TicketWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TicketWhereUniqueInputSchema),z.lazy(() => TicketWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TicketWhereUniqueInputSchema),z.lazy(() => TicketWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TicketWhereUniqueInputSchema),z.lazy(() => TicketWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TicketUpdateWithWhereUniqueWithoutJamInputSchema),z.lazy(() => TicketUpdateWithWhereUniqueWithoutJamInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TicketUpdateManyWithWhereWithoutJamInputSchema),z.lazy(() => TicketUpdateManyWithWhereWithoutJamInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TicketScalarWhereInputSchema),z.lazy(() => TicketScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TicketUpdateManyWithoutJamNestedInputSchema;
