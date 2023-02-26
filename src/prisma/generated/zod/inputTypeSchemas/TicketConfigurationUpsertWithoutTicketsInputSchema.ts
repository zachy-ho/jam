import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketConfigurationUpdateWithoutTicketsInputSchema } from './TicketConfigurationUpdateWithoutTicketsInputSchema';
import { TicketConfigurationUncheckedUpdateWithoutTicketsInputSchema } from './TicketConfigurationUncheckedUpdateWithoutTicketsInputSchema';
import { TicketConfigurationCreateWithoutTicketsInputSchema } from './TicketConfigurationCreateWithoutTicketsInputSchema';
import { TicketConfigurationUncheckedCreateWithoutTicketsInputSchema } from './TicketConfigurationUncheckedCreateWithoutTicketsInputSchema';

export const TicketConfigurationUpsertWithoutTicketsInputSchema: z.ZodType<Prisma.TicketConfigurationUpsertWithoutTicketsInput> = z.object({
  update: z.union([ z.lazy(() => TicketConfigurationUpdateWithoutTicketsInputSchema),z.lazy(() => TicketConfigurationUncheckedUpdateWithoutTicketsInputSchema) ]),
  create: z.union([ z.lazy(() => TicketConfigurationCreateWithoutTicketsInputSchema),z.lazy(() => TicketConfigurationUncheckedCreateWithoutTicketsInputSchema) ]),
}).strict();

export default TicketConfigurationUpsertWithoutTicketsInputSchema;
