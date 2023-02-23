import type { AppProps } from 'next/app';
import './globals.css';
import { trpc } from '../trpc';

function createJamApp() {
  console.log('init factory called');
  function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
  }
  return MyApp;
}

const MyJamApp = createJamApp();

export default trpc.withTRPC(MyJamApp);
