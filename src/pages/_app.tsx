import type { AppProps } from 'next/app';
import './globals.css';

function createJamApp() {
  console.log('init factory called');
  function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
  }
  return MyApp;
}

const MyJamApp = createJamApp();

export default MyJamApp;
