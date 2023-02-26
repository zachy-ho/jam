import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { VisibilitySchema } from './VisibilitySchema';
import { TicketUncheckedCreateNestedManyWithoutJamInputSchema } from './TicketUncheckedCreateNestedManyWithoutJamInputSchema';
import { JamOrganiserUncheckedCreateNestedManyWithoutJamInputSchema } from './JamOrganiserUncheckedCreateNestedManyWithoutJamInputSchema';

export const JamUncheckedCreateWithoutTicketConfigurationInputSchema: z.ZodType<Prisma.JamUncheckedCreateWithoutTicketConfigurationInput> = z.object({
  id: z.string(),
  name: z.string(),
  startDatetime: z.coerce.date(),
  endDatetime: z.coerce.date(),
  visibility: z.lazy(() => VisibilitySchema),
  summary: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  venue: z.string().optional().nullable(),
  tickets: z.lazy(() => TicketUncheckedCreateNestedManyWithoutJamInputSchema).optional(),
  organisers: z.lazy(() => JamOrganiserUncheckedCreateNestedManyWithoutJamInputSchema).optional(),
}).strict();

export default JamUncheckedCreateWithoutTicketConfigurationInputSchema;
