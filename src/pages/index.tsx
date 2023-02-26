import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { trpc } from 'base/trpc';

const LinkButton = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <Link href={href}>
    <a href={href}>{children}</a>
  </Link>
);

const Home: NextPage = () => {
  const jamCreate = trpc.jam.create.useMutation();

  const handleButtonClicked = () => {
    jamCreate.mutate({
        'id': 'c8b0d935-dfd3-490a-a35f-329c1e1eb67a',
        'name': 'test new jam',
        'startDatetime': '2023-02-19 22:20:46',
        'endDatetime': '2023-02-19 22:20:48',
        'visibility': 'PRIVATE'
    });
  };

  return (
    <div>
      <Head>
        <title>Jam</title>
        <meta name='description' content='Jammin...' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>
          Let&apos;s <a href='https://nextjs.org'>jam!</a>
        </h1>
        <LinkButton href='/jam'>sesh</LinkButton>
        <button type='submit' onClick={handleButtonClicked}>make jam</button>
      </main>
    </div>
  );
};

export default Home;
