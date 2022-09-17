import { createRouter } from 'server/createRouter';
import { z } from 'zod';

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
