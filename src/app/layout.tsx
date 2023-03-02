import * as React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from './ThemeProvider';
import { ClientProvider } from './trpcClient';

function createAppRoot() {
  console.log('App root initiated');

  const RootLayout = ({ children }: { children: React.ReactNode }) => (
    <html lang='en'>
      <body>
        <ClientProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </ClientProvider>
      </body>
    </html>
  );
  return RootLayout;
}

const RootLayout = createAppRoot();

// Built-in SEO support (https://beta.nextjs.org/docs/guides/seo)
export const metadata: Metadata = {
  title: 'Home',
  description: 'Jammin...',
};
export default RootLayout;
