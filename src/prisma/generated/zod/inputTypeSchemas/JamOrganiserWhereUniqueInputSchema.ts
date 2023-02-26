import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamOrganiserJamIdUserIdCompoundUniqueInputSchema } from './JamOrganiserJamIdUserIdCompoundUniqueInputSchema';

export const JamOrganiserWhereUniqueInputSchema: z.ZodType<Prisma.JamOrganiserWhereUniqueInput> = z.object({
  jamId_userId: z.lazy(() => JamOrganiserJamIdUserIdCompoundUniqueInputSchema).optional(),
}).strict();

export default JamOrganiserWhereUniqueInputSchema;
