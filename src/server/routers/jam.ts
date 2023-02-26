import { procedure, router } from 'server/trpc/trpc';
import { JamCreateInputSchema } from 'prisma/generated/zod/inputTypeSchemas';

export const jamRouter = router({
  create: procedure
    .input(JamCreateInputSchema)
    .mutation(async ({ ctx, input }) => {
      const { prisma } = ctx;
      const res = await prisma.jam.create({
        data: input,
      });
      return res;
    }),
});
