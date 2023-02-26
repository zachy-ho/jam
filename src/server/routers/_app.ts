import { z } from 'zod';
import { procedure, router } from 'server/trpc/trpc';
import { jamRouter } from './jam';

export const appRouter = router({
  // sample route
  hello: procedure
  .input(
    z.object({
      text: z.string()
    })
  )
  .query(({ input }) => ( 
    {
      greeting: `hello ${input.text}`
    }
  )),
  jam: jamRouter
});

export type AppRouter = typeof appRouter;
