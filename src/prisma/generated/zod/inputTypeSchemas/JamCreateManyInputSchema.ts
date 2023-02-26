import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { VisibilitySchema } from './VisibilitySchema';

export const JamCreateManyInputSchema: z.ZodType<Prisma.JamCreateManyInput> = z.object({
  id: z.string(),
  name: z.string(),
  startDatetime: z.coerce.date(),
  endDatetime: z.coerce.date(),
  visibility: z.lazy(() => VisibilitySchema),
  summary: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  venue: z.string().optional().nullable(),
}).strict();

export default JamCreateManyInputSchema;
