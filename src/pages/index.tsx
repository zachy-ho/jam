import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Jam</title>
      <meta name='description' content='Join a jam!' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <main className='h-screen w-screen flex flex-col justify-center items-center'>
      <h1 className='text-7xl'>
        Let&apos;s <a href='https://nextjs.org'>jam!</a>
      </h1>

      <div>
        <Link href='/jam'>
          <span>sesh</span>
        </Link>
      </div>
    </main>

    <footer>
      <a
        href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        Powered by{' '}
        <span>
          <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
        </span>
      </a>
    </footer>
  </div>
);

export default Home;
