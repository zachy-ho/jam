import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketCreateWithoutJamInputSchema } from './TicketCreateWithoutJamInputSchema';
import { TicketUncheckedCreateWithoutJamInputSchema } from './TicketUncheckedCreateWithoutJamInputSchema';
import { TicketCreateOrConnectWithoutJamInputSchema } from './TicketCreateOrConnectWithoutJamInputSchema';
import { TicketCreateManyJamInputEnvelopeSchema } from './TicketCreateManyJamInputEnvelopeSchema';
import { TicketWhereUniqueInputSchema } from './TicketWhereUniqueInputSchema';

export const TicketUncheckedCreateNestedManyWithoutJamInputSchema: z.ZodType<Prisma.TicketUncheckedCreateNestedManyWithoutJamInput> = z.object({
  create: z.union([ z.lazy(() => TicketCreateWithoutJamInputSchema),z.lazy(() => TicketCreateWithoutJamInputSchema).array(),z.lazy(() => TicketUncheckedCreateWithoutJamInputSchema),z.lazy(() => TicketUncheckedCreateWithoutJamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TicketCreateOrConnectWithoutJamInputSchema),z.lazy(() => TicketCreateOrConnectWithoutJamInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TicketCreateManyJamInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TicketWhereUniqueInputSchema),z.lazy(() => TicketWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TicketUncheckedCreateNestedManyWithoutJamInputSchema;
