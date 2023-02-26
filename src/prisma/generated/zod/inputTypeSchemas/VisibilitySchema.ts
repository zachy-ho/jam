import { z } from 'zod';

export const VisibilitySchema = z.enum(['PRIVATE','PUBLIC']);

export type VisibilityType = `${z.infer<typeof VisibilitySchema>}`

export default VisibilitySchema;
