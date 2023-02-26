import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketScalarWhereInputSchema } from './TicketScalarWhereInputSchema';
import { TicketUpdateManyMutationInputSchema } from './TicketUpdateManyMutationInputSchema';
import { TicketUncheckedUpdateManyWithoutTicketsInputSchema } from './TicketUncheckedUpdateManyWithoutTicketsInputSchema';

export const TicketUpdateManyWithWhereWithoutJamInputSchema: z.ZodType<Prisma.TicketUpdateManyWithWhereWithoutJamInput> = z.object({
  where: z.lazy(() => TicketScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TicketUpdateManyMutationInputSchema),z.lazy(() => TicketUncheckedUpdateManyWithoutTicketsInputSchema) ]),
}).strict();

export default TicketUpdateManyWithWhereWithoutJamInputSchema;
