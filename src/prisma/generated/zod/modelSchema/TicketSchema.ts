import { z } from 'zod';

/////////////////////////////////////////
// TICKET SCHEMA
/////////////////////////////////////////

export const TicketSchema = z.object({
  id: z.string(),
  jamId: z.string(),
  serialNumber: z.number().int(),
  ticketConfigurationId: z.string(),
})

export type Ticket = z.infer<typeof TicketSchema>

export default TicketSchema;
