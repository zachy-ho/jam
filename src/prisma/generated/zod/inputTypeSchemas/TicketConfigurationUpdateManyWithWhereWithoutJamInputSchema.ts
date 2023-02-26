import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketConfigurationScalarWhereInputSchema } from './TicketConfigurationScalarWhereInputSchema';
import { TicketConfigurationUpdateManyMutationInputSchema } from './TicketConfigurationUpdateManyMutationInputSchema';
import { TicketConfigurationUncheckedUpdateManyWithoutTicketConfigurationInputSchema } from './TicketConfigurationUncheckedUpdateManyWithoutTicketConfigurationInputSchema';

export const TicketConfigurationUpdateManyWithWhereWithoutJamInputSchema: z.ZodType<Prisma.TicketConfigurationUpdateManyWithWhereWithoutJamInput> = z.object({
  where: z.lazy(() => TicketConfigurationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TicketConfigurationUpdateManyMutationInputSchema),z.lazy(() => TicketConfigurationUncheckedUpdateManyWithoutTicketConfigurationInputSchema) ]),
}).strict();

export default TicketConfigurationUpdateManyWithWhereWithoutJamInputSchema;
