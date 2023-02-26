import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketConfigurationWhereUniqueInputSchema } from './TicketConfigurationWhereUniqueInputSchema';
import { TicketConfigurationUpdateWithoutJamInputSchema } from './TicketConfigurationUpdateWithoutJamInputSchema';
import { TicketConfigurationUncheckedUpdateWithoutJamInputSchema } from './TicketConfigurationUncheckedUpdateWithoutJamInputSchema';
import { TicketConfigurationCreateWithoutJamInputSchema } from './TicketConfigurationCreateWithoutJamInputSchema';
import { TicketConfigurationUncheckedCreateWithoutJamInputSchema } from './TicketConfigurationUncheckedCreateWithoutJamInputSchema';

export const TicketConfigurationUpsertWithWhereUniqueWithoutJamInputSchema: z.ZodType<Prisma.TicketConfigurationUpsertWithWhereUniqueWithoutJamInput> = z.object({
  where: z.lazy(() => TicketConfigurationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TicketConfigurationUpdateWithoutJamInputSchema),z.lazy(() => TicketConfigurationUncheckedUpdateWithoutJamInputSchema) ]),
  create: z.union([ z.lazy(() => TicketConfigurationCreateWithoutJamInputSchema),z.lazy(() => TicketConfigurationUncheckedCreateWithoutJamInputSchema) ]),
}).strict();

export default TicketConfigurationUpsertWithWhereUniqueWithoutJamInputSchema;
