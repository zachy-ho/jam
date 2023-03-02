'use client';

import * as React from 'react';
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import {
  smallPageMarginsPx,
  mediumPageMarginsPx,
} from 'app/ui/metrics/metrics';

const Home = () => {
  const [placeholder, setPlaceholder] = React.useState(undefined);

  return (
    <Container
      as='main'
      padding={0}
      maxWidth={{
        base: `${320 - 2 * smallPageMarginsPx}px`,
        sm: `${480 - 2 * mediumPageMarginsPx}px`,
      }}
      margin='auto'
    >
      <Container maxWidth='100%'>
        <Box>
          <FormControl>
            <FormLabel>Jam name</FormLabel>
            <Input type='text' />
          </FormControl>
        </Box>
      </Container>
    </Container>
  );
};

export default Home;
