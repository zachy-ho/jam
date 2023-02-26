import { z } from 'zod';

export const JamScalarFieldEnumSchema = z.enum(['id','name','startDatetime','endDatetime','visibility','summary','description','venue']);

export default JamScalarFieldEnumSchema;
