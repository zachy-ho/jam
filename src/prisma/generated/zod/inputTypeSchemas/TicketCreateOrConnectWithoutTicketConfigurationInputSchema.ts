import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketWhereUniqueInputSchema } from './TicketWhereUniqueInputSchema';
import { TicketCreateWithoutTicketConfigurationInputSchema } from './TicketCreateWithoutTicketConfigurationInputSchema';
import { TicketUncheckedCreateWithoutTicketConfigurationInputSchema } from './TicketUncheckedCreateWithoutTicketConfigurationInputSchema';

export const TicketCreateOrConnectWithoutTicketConfigurationInputSchema: z.ZodType<Prisma.TicketCreateOrConnectWithoutTicketConfigurationInput> = z.object({
  where: z.lazy(() => TicketWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TicketCreateWithoutTicketConfigurationInputSchema),z.lazy(() => TicketUncheckedCreateWithoutTicketConfigurationInputSchema) ]),
}).strict();

export default TicketCreateOrConnectWithoutTicketConfigurationInputSchema;
