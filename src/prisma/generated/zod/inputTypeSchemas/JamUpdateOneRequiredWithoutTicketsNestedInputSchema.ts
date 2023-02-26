import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamCreateWithoutTicketsInputSchema } from './JamCreateWithoutTicketsInputSchema';
import { JamUncheckedCreateWithoutTicketsInputSchema } from './JamUncheckedCreateWithoutTicketsInputSchema';
import { JamCreateOrConnectWithoutTicketsInputSchema } from './JamCreateOrConnectWithoutTicketsInputSchema';
import { JamUpsertWithoutTicketsInputSchema } from './JamUpsertWithoutTicketsInputSchema';
import { JamWhereUniqueInputSchema } from './JamWhereUniqueInputSchema';
import { JamUpdateWithoutTicketsInputSchema } from './JamUpdateWithoutTicketsInputSchema';
import { JamUncheckedUpdateWithoutTicketsInputSchema } from './JamUncheckedUpdateWithoutTicketsInputSchema';

export const JamUpdateOneRequiredWithoutTicketsNestedInputSchema: z.ZodType<Prisma.JamUpdateOneRequiredWithoutTicketsNestedInput> = z.object({
  create: z.union([ z.lazy(() => JamCreateWithoutTicketsInputSchema),z.lazy(() => JamUncheckedCreateWithoutTicketsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => JamCreateOrConnectWithoutTicketsInputSchema).optional(),
  upsert: z.lazy(() => JamUpsertWithoutTicketsInputSchema).optional(),
  connect: z.lazy(() => JamWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => JamUpdateWithoutTicketsInputSchema),z.lazy(() => JamUncheckedUpdateWithoutTicketsInputSchema) ]).optional(),
}).strict();

export default JamUpdateOneRequiredWithoutTicketsNestedInputSchema;
