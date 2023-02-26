import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { JamOrderByWithRelationInputSchema } from './JamOrderByWithRelationInputSchema';
import { SortOrderSchema } from './SortOrderSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';

export const JamOrganiserOrderByWithRelationInputSchema: z.ZodType<Prisma.JamOrganiserOrderByWithRelationInput> = z.object({
  jam: z.lazy(() => JamOrderByWithRelationInputSchema).optional(),
  jamId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export default JamOrganiserOrderByWithRelationInputSchema;
