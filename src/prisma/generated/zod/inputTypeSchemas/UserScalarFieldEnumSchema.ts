import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id','firstName','lastName','email']);

export default UserScalarFieldEnumSchema;
