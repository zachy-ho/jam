import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketWhereUniqueInputSchema } from './TicketWhereUniqueInputSchema';
import { TicketUpdateWithoutTicketConfigurationInputSchema } from './TicketUpdateWithoutTicketConfigurationInputSchema';
import { TicketUncheckedUpdateWithoutTicketConfigurationInputSchema } from './TicketUncheckedUpdateWithoutTicketConfigurationInputSchema';
import { TicketCreateWithoutTicketConfigurationInputSchema } from './TicketCreateWithoutTicketConfigurationInputSchema';
import { TicketUncheckedCreateWithoutTicketConfigurationInputSchema } from './TicketUncheckedCreateWithoutTicketConfigurationInputSchema';

export const TicketUpsertWithWhereUniqueWithoutTicketConfigurationInputSchema: z.ZodType<Prisma.TicketUpsertWithWhereUniqueWithoutTicketConfigurationInput> = z.object({
  where: z.lazy(() => TicketWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TicketUpdateWithoutTicketConfigurationInputSchema),z.lazy(() => TicketUncheckedUpdateWithoutTicketConfigurationInputSchema) ]),
  create: z.union([ z.lazy(() => TicketCreateWithoutTicketConfigurationInputSchema),z.lazy(() => TicketUncheckedCreateWithoutTicketConfigurationInputSchema) ]),
}).strict();

export default TicketUpsertWithWhereUniqueWithoutTicketConfigurationInputSchema;
