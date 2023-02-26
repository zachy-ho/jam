import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamCreateWithoutTicketsInputSchema } from './JamCreateWithoutTicketsInputSchema';
import { JamUncheckedCreateWithoutTicketsInputSchema } from './JamUncheckedCreateWithoutTicketsInputSchema';
import { JamCreateOrConnectWithoutTicketsInputSchema } from './JamCreateOrConnectWithoutTicketsInputSchema';
import { JamWhereUniqueInputSchema } from './JamWhereUniqueInputSchema';

export const JamCreateNestedOneWithoutTicketsInputSchema: z.ZodType<Prisma.JamCreateNestedOneWithoutTicketsInput> = z.object({
  create: z.union([ z.lazy(() => JamCreateWithoutTicketsInputSchema),z.lazy(() => JamUncheckedCreateWithoutTicketsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => JamCreateOrConnectWithoutTicketsInputSchema).optional(),
  connect: z.lazy(() => JamWhereUniqueInputSchema).optional(),
}).strict();

export default JamCreateNestedOneWithoutTicketsInputSchema;
