import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamCreateWithoutOrganisersInputSchema } from './JamCreateWithoutOrganisersInputSchema';
import { JamUncheckedCreateWithoutOrganisersInputSchema } from './JamUncheckedCreateWithoutOrganisersInputSchema';
import { JamCreateOrConnectWithoutOrganisersInputSchema } from './JamCreateOrConnectWithoutOrganisersInputSchema';
import { JamWhereUniqueInputSchema } from './JamWhereUniqueInputSchema';

export const JamCreateNestedOneWithoutOrganisersInputSchema: z.ZodType<Prisma.JamCreateNestedOneWithoutOrganisersInput> = z.object({
  create: z.union([ z.lazy(() => JamCreateWithoutOrganisersInputSchema),z.lazy(() => JamUncheckedCreateWithoutOrganisersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => JamCreateOrConnectWithoutOrganisersInputSchema).optional(),
  connect: z.lazy(() => JamWhereUniqueInputSchema).optional(),
}).strict();

export default JamCreateNestedOneWithoutOrganisersInputSchema;
