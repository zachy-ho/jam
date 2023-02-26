import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamCreateWithoutTicketConfigurationInputSchema } from './JamCreateWithoutTicketConfigurationInputSchema';
import { JamUncheckedCreateWithoutTicketConfigurationInputSchema } from './JamUncheckedCreateWithoutTicketConfigurationInputSchema';
import { JamCreateOrConnectWithoutTicketConfigurationInputSchema } from './JamCreateOrConnectWithoutTicketConfigurationInputSchema';
import { JamUpsertWithoutTicketConfigurationInputSchema } from './JamUpsertWithoutTicketConfigurationInputSchema';
import { JamWhereUniqueInputSchema } from './JamWhereUniqueInputSchema';
import { JamUpdateWithoutTicketConfigurationInputSchema } from './JamUpdateWithoutTicketConfigurationInputSchema';
import { JamUncheckedUpdateWithoutTicketConfigurationInputSchema } from './JamUncheckedUpdateWithoutTicketConfigurationInputSchema';

export const JamUpdateOneRequiredWithoutTicketConfigurationNestedInputSchema: z.ZodType<Prisma.JamUpdateOneRequiredWithoutTicketConfigurationNestedInput> = z.object({
  create: z.union([ z.lazy(() => JamCreateWithoutTicketConfigurationInputSchema),z.lazy(() => JamUncheckedCreateWithoutTicketConfigurationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => JamCreateOrConnectWithoutTicketConfigurationInputSchema).optional(),
  upsert: z.lazy(() => JamUpsertWithoutTicketConfigurationInputSchema).optional(),
  connect: z.lazy(() => JamWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => JamUpdateWithoutTicketConfigurationInputSchema),z.lazy(() => JamUncheckedUpdateWithoutTicketConfigurationInputSchema) ]).optional(),
}).strict();

export default JamUpdateOneRequiredWithoutTicketConfigurationNestedInputSchema;
