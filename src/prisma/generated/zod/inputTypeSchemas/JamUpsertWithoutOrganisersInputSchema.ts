import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamUpdateWithoutOrganisersInputSchema } from './JamUpdateWithoutOrganisersInputSchema';
import { JamUncheckedUpdateWithoutOrganisersInputSchema } from './JamUncheckedUpdateWithoutOrganisersInputSchema';
import { JamCreateWithoutOrganisersInputSchema } from './JamCreateWithoutOrganisersInputSchema';
import { JamUncheckedCreateWithoutOrganisersInputSchema } from './JamUncheckedCreateWithoutOrganisersInputSchema';

export const JamUpsertWithoutOrganisersInputSchema: z.ZodType<Prisma.JamUpsertWithoutOrganisersInput> = z.object({
  update: z.union([ z.lazy(() => JamUpdateWithoutOrganisersInputSchema),z.lazy(() => JamUncheckedUpdateWithoutOrganisersInputSchema) ]),
  create: z.union([ z.lazy(() => JamCreateWithoutOrganisersInputSchema),z.lazy(() => JamUncheckedCreateWithoutOrganisersInputSchema) ]),
}).strict();

export default JamUpsertWithoutOrganisersInputSchema;
