import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketConfigurationWhereUniqueInputSchema } from './TicketConfigurationWhereUniqueInputSchema';
import { TicketConfigurationCreateWithoutTicketsInputSchema } from './TicketConfigurationCreateWithoutTicketsInputSchema';
import { TicketConfigurationUncheckedCreateWithoutTicketsInputSchema } from './TicketConfigurationUncheckedCreateWithoutTicketsInputSchema';

export const TicketConfigurationCreateOrConnectWithoutTicketsInputSchema: z.ZodType<Prisma.TicketConfigurationCreateOrConnectWithoutTicketsInput> = z.object({
  where: z.lazy(() => TicketConfigurationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TicketConfigurationCreateWithoutTicketsInputSchema),z.lazy(() => TicketConfigurationUncheckedCreateWithoutTicketsInputSchema) ]),
}).strict();

export default TicketConfigurationCreateOrConnectWithoutTicketsInputSchema;
