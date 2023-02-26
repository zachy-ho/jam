import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketConfigurationCreateWithoutTicketsInputSchema } from './TicketConfigurationCreateWithoutTicketsInputSchema';
import { TicketConfigurationUncheckedCreateWithoutTicketsInputSchema } from './TicketConfigurationUncheckedCreateWithoutTicketsInputSchema';
import { TicketConfigurationCreateOrConnectWithoutTicketsInputSchema } from './TicketConfigurationCreateOrConnectWithoutTicketsInputSchema';
import { TicketConfigurationUpsertWithoutTicketsInputSchema } from './TicketConfigurationUpsertWithoutTicketsInputSchema';
import { TicketConfigurationWhereUniqueInputSchema } from './TicketConfigurationWhereUniqueInputSchema';
import { TicketConfigurationUpdateWithoutTicketsInputSchema } from './TicketConfigurationUpdateWithoutTicketsInputSchema';
import { TicketConfigurationUncheckedUpdateWithoutTicketsInputSchema } from './TicketConfigurationUncheckedUpdateWithoutTicketsInputSchema';

export const TicketConfigurationUpdateOneRequiredWithoutTicketsNestedInputSchema: z.ZodType<Prisma.TicketConfigurationUpdateOneRequiredWithoutTicketsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TicketConfigurationCreateWithoutTicketsInputSchema),z.lazy(() => TicketConfigurationUncheckedCreateWithoutTicketsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TicketConfigurationCreateOrConnectWithoutTicketsInputSchema).optional(),
  upsert: z.lazy(() => TicketConfigurationUpsertWithoutTicketsInputSchema).optional(),
  connect: z.lazy(() => TicketConfigurationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TicketConfigurationUpdateWithoutTicketsInputSchema),z.lazy(() => TicketConfigurationUncheckedUpdateWithoutTicketsInputSchema) ]).optional(),
}).strict();

export default TicketConfigurationUpdateOneRequiredWithoutTicketsNestedInputSchema;
