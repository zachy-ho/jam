import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketWhereUniqueInputSchema } from './TicketWhereUniqueInputSchema';
import { TicketCreateWithoutJamInputSchema } from './TicketCreateWithoutJamInputSchema';
import { TicketUncheckedCreateWithoutJamInputSchema } from './TicketUncheckedCreateWithoutJamInputSchema';

export const TicketCreateOrConnectWithoutJamInputSchema: z.ZodType<Prisma.TicketCreateOrConnectWithoutJamInput> = z.object({
  where: z.lazy(() => TicketWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TicketCreateWithoutJamInputSchema),z.lazy(() => TicketUncheckedCreateWithoutJamInputSchema) ]),
}).strict();

export default TicketCreateOrConnectWithoutJamInputSchema;
