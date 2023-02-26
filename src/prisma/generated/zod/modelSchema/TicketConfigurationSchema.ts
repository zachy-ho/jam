import { z } from 'zod';

/////////////////////////////////////////
// TICKET CONFIGURATION SCHEMA
/////////////////////////////////////////

export const TicketConfigurationSchema = z.object({
  id: z.string(),
  jamId: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  price: z.number().int().nullable(),
})

export type TicketConfiguration = z.infer<typeof TicketConfigurationSchema>

export default TicketConfigurationSchema;
