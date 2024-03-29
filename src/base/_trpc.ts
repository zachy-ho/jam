import { httpBatchLink, loggerLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import type { AppRouter } from 'server/routers/_app';

function getBaseUrl() {
  if (typeof window !== 'undefined') {
    return '';
  }

  // if (process.env.VERCEL_URL) {
  // return `https://${env.VERCEL_URL}`;
  // }

  return `http://localhost:${process.env.PORT ?? 3000}`;
}

/**
 * @deprecated until tRPC makes '@trpc/next' work with RSC
 *
 * tRPC hooks to use on the client
 */
export const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      links: [
        loggerLink({
          enabled: (opts) =>
            (process.env.NODE_ENV === 'development' &&
              typeof window !== 'undefined') ||
            (opts.direction === 'down' && opts.result instanceof Error),
        }),
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
    };
  },
  ssr: false,
});
