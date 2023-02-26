import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamCreateWithoutOrganisersInputSchema } from './JamCreateWithoutOrganisersInputSchema';
import { JamUncheckedCreateWithoutOrganisersInputSchema } from './JamUncheckedCreateWithoutOrganisersInputSchema';
import { JamCreateOrConnectWithoutOrganisersInputSchema } from './JamCreateOrConnectWithoutOrganisersInputSchema';
import { JamUpsertWithoutOrganisersInputSchema } from './JamUpsertWithoutOrganisersInputSchema';
import { JamWhereUniqueInputSchema } from './JamWhereUniqueInputSchema';
import { JamUpdateWithoutOrganisersInputSchema } from './JamUpdateWithoutOrganisersInputSchema';
import { JamUncheckedUpdateWithoutOrganisersInputSchema } from './JamUncheckedUpdateWithoutOrganisersInputSchema';

export const JamUpdateOneRequiredWithoutOrganisersNestedInputSchema: z.ZodType<Prisma.JamUpdateOneRequiredWithoutOrganisersNestedInput> = z.object({
  create: z.union([ z.lazy(() => JamCreateWithoutOrganisersInputSchema),z.lazy(() => JamUncheckedCreateWithoutOrganisersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => JamCreateOrConnectWithoutOrganisersInputSchema).optional(),
  upsert: z.lazy(() => JamUpsertWithoutOrganisersInputSchema).optional(),
  connect: z.lazy(() => JamWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => JamUpdateWithoutOrganisersInputSchema),z.lazy(() => JamUncheckedUpdateWithoutOrganisersInputSchema) ]).optional(),
}).strict();

export default JamUpdateOneRequiredWithoutOrganisersNestedInputSchema;
