import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketWhereUniqueInputSchema } from './TicketWhereUniqueInputSchema';
import { TicketUpdateWithoutJamInputSchema } from './TicketUpdateWithoutJamInputSchema';
import { TicketUncheckedUpdateWithoutJamInputSchema } from './TicketUncheckedUpdateWithoutJamInputSchema';
import { TicketCreateWithoutJamInputSchema } from './TicketCreateWithoutJamInputSchema';
import { TicketUncheckedCreateWithoutJamInputSchema } from './TicketUncheckedCreateWithoutJamInputSchema';

export const TicketUpsertWithWhereUniqueWithoutJamInputSchema: z.ZodType<Prisma.TicketUpsertWithWhereUniqueWithoutJamInput> = z.object({
  where: z.lazy(() => TicketWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TicketUpdateWithoutJamInputSchema),z.lazy(() => TicketUncheckedUpdateWithoutJamInputSchema) ]),
  create: z.union([ z.lazy(() => TicketCreateWithoutJamInputSchema),z.lazy(() => TicketUncheckedCreateWithoutJamInputSchema) ]),
}).strict();

export default TicketUpsertWithWhereUniqueWithoutJamInputSchema;
