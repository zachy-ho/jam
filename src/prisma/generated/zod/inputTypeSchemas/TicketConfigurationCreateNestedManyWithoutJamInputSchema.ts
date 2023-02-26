import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TicketConfigurationCreateWithoutJamInputSchema } from './TicketConfigurationCreateWithoutJamInputSchema';
import { TicketConfigurationUncheckedCreateWithoutJamInputSchema } from './TicketConfigurationUncheckedCreateWithoutJamInputSchema';
import { TicketConfigurationCreateOrConnectWithoutJamInputSchema } from './TicketConfigurationCreateOrConnectWithoutJamInputSchema';
import { TicketConfigurationCreateManyJamInputEnvelopeSchema } from './TicketConfigurationCreateManyJamInputEnvelopeSchema';
import { TicketConfigurationWhereUniqueInputSchema } from './TicketConfigurationWhereUniqueInputSchema';

export const TicketConfigurationCreateNestedManyWithoutJamInputSchema: z.ZodType<Prisma.TicketConfigurationCreateNestedManyWithoutJamInput> = z.object({
  create: z.union([ z.lazy(() => TicketConfigurationCreateWithoutJamInputSchema),z.lazy(() => TicketConfigurationCreateWithoutJamInputSchema).array(),z.lazy(() => TicketConfigurationUncheckedCreateWithoutJamInputSchema),z.lazy(() => TicketConfigurationUncheckedCreateWithoutJamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TicketConfigurationCreateOrConnectWithoutJamInputSchema),z.lazy(() => TicketConfigurationCreateOrConnectWithoutJamInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TicketConfigurationCreateManyJamInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TicketConfigurationWhereUniqueInputSchema),z.lazy(() => TicketConfigurationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TicketConfigurationCreateNestedManyWithoutJamInputSchema;
