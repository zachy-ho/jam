import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketConfigurationCreateWithoutJamInputSchema } from './TicketConfigurationCreateWithoutJamInputSchema';
import { TicketConfigurationUncheckedCreateWithoutJamInputSchema } from './TicketConfigurationUncheckedCreateWithoutJamInputSchema';
import { TicketConfigurationCreateOrConnectWithoutJamInputSchema } from './TicketConfigurationCreateOrConnectWithoutJamInputSchema';
import { TicketConfigurationUpsertWithWhereUniqueWithoutJamInputSchema } from './TicketConfigurationUpsertWithWhereUniqueWithoutJamInputSchema';
import { TicketConfigurationCreateManyJamInputEnvelopeSchema } from './TicketConfigurationCreateManyJamInputEnvelopeSchema';
import { TicketConfigurationWhereUniqueInputSchema } from './TicketConfigurationWhereUniqueInputSchema';
import { TicketConfigurationUpdateWithWhereUniqueWithoutJamInputSchema } from './TicketConfigurationUpdateWithWhereUniqueWithoutJamInputSchema';
import { TicketConfigurationUpdateManyWithWhereWithoutJamInputSchema } from './TicketConfigurationUpdateManyWithWhereWithoutJamInputSchema';
import { TicketConfigurationScalarWhereInputSchema } from './TicketConfigurationScalarWhereInputSchema';

export const TicketConfigurationUpdateManyWithoutJamNestedInputSchema: z.ZodType<Prisma.TicketConfigurationUpdateManyWithoutJamNestedInput> = z.object({
  create: z.union([ z.lazy(() => TicketConfigurationCreateWithoutJamInputSchema),z.lazy(() => TicketConfigurationCreateWithoutJamInputSchema).array(),z.lazy(() => TicketConfigurationUncheckedCreateWithoutJamInputSchema),z.lazy(() => TicketConfigurationUncheckedCreateWithoutJamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TicketConfigurationCreateOrConnectWithoutJamInputSchema),z.lazy(() => TicketConfigurationCreateOrConnectWithoutJamInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TicketConfigurationUpsertWithWhereUniqueWithoutJamInputSchema),z.lazy(() => TicketConfigurationUpsertWithWhereUniqueWithoutJamInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TicketConfigurationCreateManyJamInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TicketConfigurationWhereUniqueInputSchema),z.lazy(() => TicketConfigurationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TicketConfigurationWhereUniqueInputSchema),z.lazy(() => TicketConfigurationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TicketConfigurationWhereUniqueInputSchema),z.lazy(() => TicketConfigurationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TicketConfigurationWhereUniqueInputSchema),z.lazy(() => TicketConfigurationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TicketConfigurationUpdateWithWhereUniqueWithoutJamInputSchema),z.lazy(() => TicketConfigurationUpdateWithWhereUniqueWithoutJamInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TicketConfigurationUpdateManyWithWhereWithoutJamInputSchema),z.lazy(() => TicketConfigurationUpdateManyWithWhereWithoutJamInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TicketConfigurationScalarWhereInputSchema),z.lazy(() => TicketConfigurationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TicketConfigurationUpdateManyWithoutJamNestedInputSchema;
