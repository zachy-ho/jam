'use client';

import * as React from 'react';
import { httpBatchLink, loggerLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppRouter } from 'server/routers/_app';

export const trpc = createTRPCReact<AppRouter>();

function getBaseUrl() {
  if (typeof window !== 'undefined') {
    return '';
  }

  // if (process.env.VERCEL_URL) {
  // return `https://${env.VERCEL_URL}`;
  // }

  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export function ClientProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(() => new QueryClient());
  const [trpcClient] = React.useState(() =>
    trpc.createClient({
      links: [
        loggerLink({
          enabled: () => true,
        }),
        // httpBatchLink should be the last one in the link chain
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}
