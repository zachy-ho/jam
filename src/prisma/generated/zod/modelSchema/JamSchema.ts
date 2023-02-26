import { z } from 'zod';
import { VisibilitySchema } from '../inputTypeSchemas/VisibilitySchema'

/////////////////////////////////////////
// JAM SCHEMA
/////////////////////////////////////////

export const JamSchema = z.object({
  visibility: VisibilitySchema,
  id: z.string(),
  name: z.string(),
  startDatetime: z.coerce.date(),
  endDatetime: z.coerce.date(),
  summary: z.string().nullable(),
  description: z.string().nullable(),
  venue: z.string().nullable(),
})

export type Jam = z.infer<typeof JamSchema>

export default JamSchema;
