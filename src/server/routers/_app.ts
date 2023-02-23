import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();

export const appRouter = t.router({
  // sample route
  hello: t.procedure.input(
    z.object({
      text: z.string()
    })
  )
  .query(({ input }) => ( 
    {
      greeting: `hello ${input.text}`
    }
  ))
});

export type AppRouter = typeof appRouter;
