import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketWhereUniqueInputSchema } from './TicketWhereUniqueInputSchema';
import { TicketUpdateWithoutTicketConfigurationInputSchema } from './TicketUpdateWithoutTicketConfigurationInputSchema';
import { TicketUncheckedUpdateWithoutTicketConfigurationInputSchema } from './TicketUncheckedUpdateWithoutTicketConfigurationInputSchema';

export const TicketUpdateWithWhereUniqueWithoutTicketConfigurationInputSchema: z.ZodType<Prisma.TicketUpdateWithWhereUniqueWithoutTicketConfigurationInput> = z.object({
  where: z.lazy(() => TicketWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TicketUpdateWithoutTicketConfigurationInputSchema),z.lazy(() => TicketUncheckedUpdateWithoutTicketConfigurationInputSchema) ]),
}).strict();

export default TicketUpdateWithWhereUniqueWithoutTicketConfigurationInputSchema;
