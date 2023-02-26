import { z } from 'zod';

export const TicketScalarFieldEnumSchema = z.enum(['id','jamId','serialNumber','ticketConfigurationId']);

export default TicketScalarFieldEnumSchema;
