import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const LinkButton = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <Link href={href}>
    <a href={href} className="border-neutral-100">{children}</a>
  </Link>
);

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Jam</title>
      <meta name='description' content='Join a jam!' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <main className='flex h-screen w-screen flex-col items-center justify-center'>
      <h1 className='text-7xl'>
        Let&apos;s <a href='https://nextjs.org'>jam!</a>
      </h1>
      <LinkButton href='/jam'>sesh</LinkButton>
    </main>
  </div>
);

export default Home;
