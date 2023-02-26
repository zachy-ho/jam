import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketScalarWhereInputSchema } from './TicketScalarWhereInputSchema';
import { TicketUpdateManyMutationInputSchema } from './TicketUpdateManyMutationInputSchema';
import { TicketUncheckedUpdateManyWithoutTicketsInputSchema } from './TicketUncheckedUpdateManyWithoutTicketsInputSchema';

export const TicketUpdateManyWithWhereWithoutTicketConfigurationInputSchema: z.ZodType<Prisma.TicketUpdateManyWithWhereWithoutTicketConfigurationInput> = z.object({
  where: z.lazy(() => TicketScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TicketUpdateManyMutationInputSchema),z.lazy(() => TicketUncheckedUpdateManyWithoutTicketsInputSchema) ]),
}).strict();

export default TicketUpdateManyWithWhereWithoutTicketConfigurationInputSchema;
