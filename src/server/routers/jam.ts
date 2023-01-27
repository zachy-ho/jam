import { createRouter } from 'server/createRouter';
import { z } from 'zod';

const Visibility = ['public', 'private'] as const;

// Sample domain object declaration and class object shape
const createJamRequest = z.object({
  name: z.string(),
  details: z.string(),
  visibility: z.enum(Visibility)
});

export const jamRouter = createRouter()
  .query('', {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `hello ${input?.text ?? 'world'}`,
      };
    },
});
