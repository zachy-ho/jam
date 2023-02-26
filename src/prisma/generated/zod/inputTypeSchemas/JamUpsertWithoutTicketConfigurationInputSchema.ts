import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamUpdateWithoutTicketConfigurationInputSchema } from './JamUpdateWithoutTicketConfigurationInputSchema';
import { JamUncheckedUpdateWithoutTicketConfigurationInputSchema } from './JamUncheckedUpdateWithoutTicketConfigurationInputSchema';
import { JamCreateWithoutTicketConfigurationInputSchema } from './JamCreateWithoutTicketConfigurationInputSchema';
import { JamUncheckedCreateWithoutTicketConfigurationInputSchema } from './JamUncheckedCreateWithoutTicketConfigurationInputSchema';

export const JamUpsertWithoutTicketConfigurationInputSchema: z.ZodType<Prisma.JamUpsertWithoutTicketConfigurationInput> = z.object({
  update: z.union([ z.lazy(() => JamUpdateWithoutTicketConfigurationInputSchema),z.lazy(() => JamUncheckedUpdateWithoutTicketConfigurationInputSchema) ]),
  create: z.union([ z.lazy(() => JamCreateWithoutTicketConfigurationInputSchema),z.lazy(() => JamUncheckedCreateWithoutTicketConfigurationInputSchema) ]),
}).strict();

export default JamUpsertWithoutTicketConfigurationInputSchema;
