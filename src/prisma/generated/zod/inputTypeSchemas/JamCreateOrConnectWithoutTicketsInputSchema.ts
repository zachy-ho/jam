import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamWhereUniqueInputSchema } from './JamWhereUniqueInputSchema';
import { JamCreateWithoutTicketsInputSchema } from './JamCreateWithoutTicketsInputSchema';
import { JamUncheckedCreateWithoutTicketsInputSchema } from './JamUncheckedCreateWithoutTicketsInputSchema';

export const JamCreateOrConnectWithoutTicketsInputSchema: z.ZodType<Prisma.JamCreateOrConnectWithoutTicketsInput> = z.object({
  where: z.lazy(() => JamWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => JamCreateWithoutTicketsInputSchema),z.lazy(() => JamUncheckedCreateWithoutTicketsInputSchema) ]),
}).strict();

export default JamCreateOrConnectWithoutTicketsInputSchema;
