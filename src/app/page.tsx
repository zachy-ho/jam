'use client';

import * as React from 'react';
import type { NextPage } from 'next';
import { trpc } from 'app/trpcClient';

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
    <main>
      <h1> Jammin&apos; </h1>
      <button type='button' onClick={handleButtonClicked}>make jam</button>
    </main>
  );
};

export default Home;
