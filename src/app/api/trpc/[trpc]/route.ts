import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { createContext } from 'server/trpc/context';
import { appRouter } from 'server/routers/_app';

const handler = (request: Request) => {
  console.log('handler called with request', request);
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req: request,
    router: appRouter,
    createContext,
  });
};

// Queries
export const GET = handler;
// Mutations
export const POST = handler;
