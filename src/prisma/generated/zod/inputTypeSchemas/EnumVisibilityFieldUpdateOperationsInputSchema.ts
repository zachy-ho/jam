import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { VisibilitySchema } from './VisibilitySchema';

export const EnumVisibilityFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumVisibilityFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => VisibilitySchema).optional(),
}).strict();

export default EnumVisibilityFieldUpdateOperationsInputSchema;
