import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { VisibilitySchema } from './VisibilitySchema';
import { TicketCreateNestedManyWithoutJamInputSchema } from './TicketCreateNestedManyWithoutJamInputSchema';
import { JamOrganiserCreateNestedManyWithoutJamInputSchema } from './JamOrganiserCreateNestedManyWithoutJamInputSchema';

export const JamCreateWithoutTicketConfigurationInputSchema: z.ZodType<Prisma.JamCreateWithoutTicketConfigurationInput> = z.object({
  id: z.string(),
  name: z.string(),
  startDatetime: z.coerce.date(),
  endDatetime: z.coerce.date(),
  visibility: z.lazy(() => VisibilitySchema),
  summary: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  venue: z.string().optional().nullable(),
  tickets: z.lazy(() => TicketCreateNestedManyWithoutJamInputSchema).optional(),
  organisers: z.lazy(() => JamOrganiserCreateNestedManyWithoutJamInputSchema).optional(),
}).strict();

export default JamCreateWithoutTicketConfigurationInputSchema;
