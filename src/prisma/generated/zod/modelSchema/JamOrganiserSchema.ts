import { z } from 'zod';

/////////////////////////////////////////
// JAM ORGANISER SCHEMA
/////////////////////////////////////////

export const JamOrganiserSchema = z.object({
  jamId: z.string(),
  userId: z.string(),
})

export type JamOrganiser = z.infer<typeof JamOrganiserSchema>

export default JamOrganiserSchema;
