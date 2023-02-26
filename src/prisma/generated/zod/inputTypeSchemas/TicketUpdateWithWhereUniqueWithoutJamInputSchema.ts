import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketWhereUniqueInputSchema } from './TicketWhereUniqueInputSchema';
import { TicketUpdateWithoutJamInputSchema } from './TicketUpdateWithoutJamInputSchema';
import { TicketUncheckedUpdateWithoutJamInputSchema } from './TicketUncheckedUpdateWithoutJamInputSchema';

export const TicketUpdateWithWhereUniqueWithoutJamInputSchema: z.ZodType<Prisma.TicketUpdateWithWhereUniqueWithoutJamInput> = z.object({
  where: z.lazy(() => TicketWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TicketUpdateWithoutJamInputSchema),z.lazy(() => TicketUncheckedUpdateWithoutJamInputSchema) ]),
}).strict();

export default TicketUpdateWithWhereUniqueWithoutJamInputSchema;
