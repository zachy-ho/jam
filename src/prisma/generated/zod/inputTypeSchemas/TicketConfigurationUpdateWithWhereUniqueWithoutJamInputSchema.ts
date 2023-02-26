import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketConfigurationWhereUniqueInputSchema } from './TicketConfigurationWhereUniqueInputSchema';
import { TicketConfigurationUpdateWithoutJamInputSchema } from './TicketConfigurationUpdateWithoutJamInputSchema';
import { TicketConfigurationUncheckedUpdateWithoutJamInputSchema } from './TicketConfigurationUncheckedUpdateWithoutJamInputSchema';

export const TicketConfigurationUpdateWithWhereUniqueWithoutJamInputSchema: z.ZodType<Prisma.TicketConfigurationUpdateWithWhereUniqueWithoutJamInput> = z.object({
  where: z.lazy(() => TicketConfigurationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TicketConfigurationUpdateWithoutJamInputSchema),z.lazy(() => TicketConfigurationUncheckedUpdateWithoutJamInputSchema) ]),
}).strict();

export default TicketConfigurationUpdateWithWhereUniqueWithoutJamInputSchema;
