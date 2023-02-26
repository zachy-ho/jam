import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketConfigurationCreateWithoutTicketsInputSchema } from './TicketConfigurationCreateWithoutTicketsInputSchema';
import { TicketConfigurationUncheckedCreateWithoutTicketsInputSchema } from './TicketConfigurationUncheckedCreateWithoutTicketsInputSchema';
import { TicketConfigurationCreateOrConnectWithoutTicketsInputSchema } from './TicketConfigurationCreateOrConnectWithoutTicketsInputSchema';
import { TicketConfigurationWhereUniqueInputSchema } from './TicketConfigurationWhereUniqueInputSchema';

export const TicketConfigurationCreateNestedOneWithoutTicketsInputSchema: z.ZodType<Prisma.TicketConfigurationCreateNestedOneWithoutTicketsInput> = z.object({
  create: z.union([ z.lazy(() => TicketConfigurationCreateWithoutTicketsInputSchema),z.lazy(() => TicketConfigurationUncheckedCreateWithoutTicketsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TicketConfigurationCreateOrConnectWithoutTicketsInputSchema).optional(),
  connect: z.lazy(() => TicketConfigurationWhereUniqueInputSchema).optional(),
}).strict();

export default TicketConfigurationCreateNestedOneWithoutTicketsInputSchema;
