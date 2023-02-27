'use client';

import * as React from 'react';
import { trpc } from 'app/trpcClient';

const Home = () => {
  const [placeholder, setPlaceholder] = React.useState(undefined);

  return (
    <main>
      <h1>Jammin&apos;</h1>
      <button type='button'>make jam</button>
    </main>
  );
};

export default Home;
