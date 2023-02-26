import { z } from 'zod';

export const TicketConfigurationScalarFieldEnumSchema = z.enum(['id','jamId','name','description','price']);

export default TicketConfigurationScalarFieldEnumSchema;
