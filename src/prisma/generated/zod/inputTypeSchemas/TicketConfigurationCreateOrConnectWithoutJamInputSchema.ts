import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketConfigurationWhereUniqueInputSchema } from './TicketConfigurationWhereUniqueInputSchema';
import { TicketConfigurationCreateWithoutJamInputSchema } from './TicketConfigurationCreateWithoutJamInputSchema';
import { TicketConfigurationUncheckedCreateWithoutJamInputSchema } from './TicketConfigurationUncheckedCreateWithoutJamInputSchema';

export const TicketConfigurationCreateOrConnectWithoutJamInputSchema: z.ZodType<Prisma.TicketConfigurationCreateOrConnectWithoutJamInput> = z.object({
  where: z.lazy(() => TicketConfigurationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TicketConfigurationCreateWithoutJamInputSchema),z.lazy(() => TicketConfigurationUncheckedCreateWithoutJamInputSchema) ]),
}).strict();

export default TicketConfigurationCreateOrConnectWithoutJamInputSchema;
