import { z } from 'zod';
import { type Prisma } from '@prisma/client';

export const JamOrganiserJamIdUserIdCompoundUniqueInputSchema: z.ZodType<Prisma.JamOrganiserJamIdUserIdCompoundUniqueInput> = z.object({
  jamId: z.string(),
  userId: z.string(),
}).strict();

export default JamOrganiserJamIdUserIdCompoundUniqueInputSchema;
