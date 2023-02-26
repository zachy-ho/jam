import * as React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { ClientProvider } from './trpcClient';

function createAppRoot() {
  console.log('App root initiated');

  const RootLayout = ({ children }: { children: React.ReactNode }) => (
    <ClientProvider>
      <html lang='en'>
        <body>{children}</body>
      </html>
    </ClientProvider>
  );
  return RootLayout;
}

const RootLayout = createAppRoot();

// Built-in SEO support (https://beta.nextjs.org/docs/guides/seo)
export const metadata: Metadata = {
  title: 'Home',
  description: 'Jammin...'
};
export default RootLayout;
