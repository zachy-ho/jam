import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamWhereUniqueInputSchema } from './JamWhereUniqueInputSchema';
import { JamCreateWithoutTicketConfigurationInputSchema } from './JamCreateWithoutTicketConfigurationInputSchema';
import { JamUncheckedCreateWithoutTicketConfigurationInputSchema } from './JamUncheckedCreateWithoutTicketConfigurationInputSchema';

export const JamCreateOrConnectWithoutTicketConfigurationInputSchema: z.ZodType<Prisma.JamCreateOrConnectWithoutTicketConfigurationInput> = z.object({
  where: z.lazy(() => JamWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => JamCreateWithoutTicketConfigurationInputSchema),z.lazy(() => JamUncheckedCreateWithoutTicketConfigurationInputSchema) ]),
}).strict();

export default JamCreateOrConnectWithoutTicketConfigurationInputSchema;
