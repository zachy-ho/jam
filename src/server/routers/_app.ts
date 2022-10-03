import { createRouter } from '~/server/createRouter';
import { jamRouter } from './jam';

export const appRouter = createRouter()
  .query('chicken', {
    resolve() {
      return {
        very: 'yum',
      };
    },
  })
  .merge('jam', jamRouter);
