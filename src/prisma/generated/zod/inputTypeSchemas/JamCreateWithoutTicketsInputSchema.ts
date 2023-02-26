import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { VisibilitySchema } from './VisibilitySchema';
import { TicketConfigurationCreateNestedManyWithoutJamInputSchema } from './TicketConfigurationCreateNestedManyWithoutJamInputSchema';
import { JamOrganiserCreateNestedManyWithoutJamInputSchema } from './JamOrganiserCreateNestedManyWithoutJamInputSchema';

export const JamCreateWithoutTicketsInputSchema: z.ZodType<Prisma.JamCreateWithoutTicketsInput> = z.object({
  id: z.string(),
  name: z.string(),
  startDatetime: z.coerce.date(),
  endDatetime: z.coerce.date(),
  visibility: z.lazy(() => VisibilitySchema),
  summary: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  venue: z.string().optional().nullable(),
  ticketConfiguration: z.lazy(() => TicketConfigurationCreateNestedManyWithoutJamInputSchema).optional(),
  organisers: z.lazy(() => JamOrganiserCreateNestedManyWithoutJamInputSchema).optional(),
}).strict();

export default JamCreateWithoutTicketsInputSchema;
