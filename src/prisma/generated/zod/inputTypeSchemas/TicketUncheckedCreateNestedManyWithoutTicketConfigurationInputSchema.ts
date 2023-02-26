import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketCreateWithoutTicketConfigurationInputSchema } from './TicketCreateWithoutTicketConfigurationInputSchema';
import { TicketUncheckedCreateWithoutTicketConfigurationInputSchema } from './TicketUncheckedCreateWithoutTicketConfigurationInputSchema';
import { TicketCreateOrConnectWithoutTicketConfigurationInputSchema } from './TicketCreateOrConnectWithoutTicketConfigurationInputSchema';
import { TicketCreateManyTicketConfigurationInputEnvelopeSchema } from './TicketCreateManyTicketConfigurationInputEnvelopeSchema';
import { TicketWhereUniqueInputSchema } from './TicketWhereUniqueInputSchema';

export const TicketUncheckedCreateNestedManyWithoutTicketConfigurationInputSchema: z.ZodType<Prisma.TicketUncheckedCreateNestedManyWithoutTicketConfigurationInput> = z.object({
  create: z.union([ z.lazy(() => TicketCreateWithoutTicketConfigurationInputSchema),z.lazy(() => TicketCreateWithoutTicketConfigurationInputSchema).array(),z.lazy(() => TicketUncheckedCreateWithoutTicketConfigurationInputSchema),z.lazy(() => TicketUncheckedCreateWithoutTicketConfigurationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TicketCreateOrConnectWithoutTicketConfigurationInputSchema),z.lazy(() => TicketCreateOrConnectWithoutTicketConfigurationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TicketCreateManyTicketConfigurationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TicketWhereUniqueInputSchema),z.lazy(() => TicketWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TicketUncheckedCreateNestedManyWithoutTicketConfigurationInputSchema;
