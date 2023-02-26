import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketCreateWithoutTicketConfigurationInputSchema } from './TicketCreateWithoutTicketConfigurationInputSchema';
import { TicketUncheckedCreateWithoutTicketConfigurationInputSchema } from './TicketUncheckedCreateWithoutTicketConfigurationInputSchema';
import { TicketCreateOrConnectWithoutTicketConfigurationInputSchema } from './TicketCreateOrConnectWithoutTicketConfigurationInputSchema';
import { TicketUpsertWithWhereUniqueWithoutTicketConfigurationInputSchema } from './TicketUpsertWithWhereUniqueWithoutTicketConfigurationInputSchema';
import { TicketCreateManyTicketConfigurationInputEnvelopeSchema } from './TicketCreateManyTicketConfigurationInputEnvelopeSchema';
import { TicketWhereUniqueInputSchema } from './TicketWhereUniqueInputSchema';
import { TicketUpdateWithWhereUniqueWithoutTicketConfigurationInputSchema } from './TicketUpdateWithWhereUniqueWithoutTicketConfigurationInputSchema';
import { TicketUpdateManyWithWhereWithoutTicketConfigurationInputSchema } from './TicketUpdateManyWithWhereWithoutTicketConfigurationInputSchema';
import { TicketScalarWhereInputSchema } from './TicketScalarWhereInputSchema';

export const TicketUpdateManyWithoutTicketConfigurationNestedInputSchema: z.ZodType<Prisma.TicketUpdateManyWithoutTicketConfigurationNestedInput> = z.object({
  create: z.union([ z.lazy(() => TicketCreateWithoutTicketConfigurationInputSchema),z.lazy(() => TicketCreateWithoutTicketConfigurationInputSchema).array(),z.lazy(() => TicketUncheckedCreateWithoutTicketConfigurationInputSchema),z.lazy(() => TicketUncheckedCreateWithoutTicketConfigurationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TicketCreateOrConnectWithoutTicketConfigurationInputSchema),z.lazy(() => TicketCreateOrConnectWithoutTicketConfigurationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TicketUpsertWithWhereUniqueWithoutTicketConfigurationInputSchema),z.lazy(() => TicketUpsertWithWhereUniqueWithoutTicketConfigurationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TicketCreateManyTicketConfigurationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TicketWhereUniqueInputSchema),z.lazy(() => TicketWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TicketWhereUniqueInputSchema),z.lazy(() => TicketWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TicketWhereUniqueInputSchema),z.lazy(() => TicketWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TicketWhereUniqueInputSchema),z.lazy(() => TicketWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TicketUpdateWithWhereUniqueWithoutTicketConfigurationInputSchema),z.lazy(() => TicketUpdateWithWhereUniqueWithoutTicketConfigurationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TicketUpdateManyWithWhereWithoutTicketConfigurationInputSchema),z.lazy(() => TicketUpdateManyWithWhereWithoutTicketConfigurationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TicketScalarWhereInputSchema),z.lazy(() => TicketScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TicketUpdateManyWithoutTicketConfigurationNestedInputSchema;
