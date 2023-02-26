import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamUpdateWithoutTicketsInputSchema } from './JamUpdateWithoutTicketsInputSchema';
import { JamUncheckedUpdateWithoutTicketsInputSchema } from './JamUncheckedUpdateWithoutTicketsInputSchema';
import { JamCreateWithoutTicketsInputSchema } from './JamCreateWithoutTicketsInputSchema';
import { JamUncheckedCreateWithoutTicketsInputSchema } from './JamUncheckedCreateWithoutTicketsInputSchema';

export const JamUpsertWithoutTicketsInputSchema: z.ZodType<Prisma.JamUpsertWithoutTicketsInput> = z.object({
  update: z.union([ z.lazy(() => JamUpdateWithoutTicketsInputSchema),z.lazy(() => JamUncheckedUpdateWithoutTicketsInputSchema) ]),
  create: z.union([ z.lazy(() => JamCreateWithoutTicketsInputSchema),z.lazy(() => JamUncheckedCreateWithoutTicketsInputSchema) ]),
}).strict();

export default JamUpsertWithoutTicketsInputSchema;
