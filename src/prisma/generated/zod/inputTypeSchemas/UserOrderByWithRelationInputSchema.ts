import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';
import { JamOrganiserOrderByRelationAggregateInputSchema } from './JamOrganiserOrderByRelationAggregateInputSchema';

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  organisedJams: z.lazy(() => JamOrganiserOrderByRelationAggregateInputSchema).optional(),
}).strict();

export default UserOrderByWithRelationInputSchema;
