import type { AppProps } from 'next/app';
import { trpc } from 'base/_trpc';

/**
* @deprecated
*/
function createJamApp() {
  console.log('init factory called');
  function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
  }
  return MyApp;
}

const MyJamApp = createJamApp();

export default trpc.withTRPC(MyJamApp);
