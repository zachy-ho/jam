import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamCreateWithoutTicketConfigurationInputSchema } from './JamCreateWithoutTicketConfigurationInputSchema';
import { JamUncheckedCreateWithoutTicketConfigurationInputSchema } from './JamUncheckedCreateWithoutTicketConfigurationInputSchema';
import { JamCreateOrConnectWithoutTicketConfigurationInputSchema } from './JamCreateOrConnectWithoutTicketConfigurationInputSchema';
import { JamWhereUniqueInputSchema } from './JamWhereUniqueInputSchema';

export const JamCreateNestedOneWithoutTicketConfigurationInputSchema: z.ZodType<Prisma.JamCreateNestedOneWithoutTicketConfigurationInput> = z.object({
  create: z.union([ z.lazy(() => JamCreateWithoutTicketConfigurationInputSchema),z.lazy(() => JamUncheckedCreateWithoutTicketConfigurationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => JamCreateOrConnectWithoutTicketConfigurationInputSchema).optional(),
  connect: z.lazy(() => JamWhereUniqueInputSchema).optional(),
}).strict();

export default JamCreateNestedOneWithoutTicketConfigurationInputSchema;
