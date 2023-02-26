import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamWhereUniqueInputSchema } from './JamWhereUniqueInputSchema';
import { JamCreateWithoutOrganisersInputSchema } from './JamCreateWithoutOrganisersInputSchema';
import { JamUncheckedCreateWithoutOrganisersInputSchema } from './JamUncheckedCreateWithoutOrganisersInputSchema';

export const JamCreateOrConnectWithoutOrganisersInputSchema: z.ZodType<Prisma.JamCreateOrConnectWithoutOrganisersInput> = z.object({
  where: z.lazy(() => JamWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => JamCreateWithoutOrganisersInputSchema),z.lazy(() => JamUncheckedCreateWithoutOrganisersInputSchema) ]),
}).strict();

export default JamCreateOrConnectWithoutOrganisersInputSchema;
