import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { VisibilitySchema } from './VisibilitySchema';
import { TicketConfigurationUncheckedCreateNestedManyWithoutJamInputSchema } from './TicketConfigurationUncheckedCreateNestedManyWithoutJamInputSchema';
import { JamOrganiserUncheckedCreateNestedManyWithoutJamInputSchema } from './JamOrganiserUncheckedCreateNestedManyWithoutJamInputSchema';

export const JamUncheckedCreateWithoutTicketsInputSchema: z.ZodType<Prisma.JamUncheckedCreateWithoutTicketsInput> = z.object({
  id: z.string(),
  name: z.string(),
  startDatetime: z.coerce.date(),
  endDatetime: z.coerce.date(),
  visibility: z.lazy(() => VisibilitySchema),
  summary: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  venue: z.string().optional().nullable(),
  ticketConfiguration: z.lazy(() => TicketConfigurationUncheckedCreateNestedManyWithoutJamInputSchema).optional(),
  organisers: z.lazy(() => JamOrganiserUncheckedCreateNestedManyWithoutJamInputSchema).optional(),
}).strict();

export default JamUncheckedCreateWithoutTicketsInputSchema;
