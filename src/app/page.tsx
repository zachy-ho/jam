'use client';

import * as React from 'react';
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  useRadio,
  useRadioGroup,
} from '@chakra-ui/react';
import type { UseRadioProps } from '@chakra-ui/react';
import {
  smallPageMarginsPx,
  mediumPageMarginsPx,
} from 'app/ui/metrics/metrics';

const RadioCard = (props: UseRadioProps & { children?: React.ReactNode }) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  return (
    <Box as='label'>
      <input {...getInputProps()}/>
      <Box
        {...getCheckboxProps()}
        cursor='pointer'
        borderRadius='md'
        _checked={{
          bg: 'grey',
          color: 'white',
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
};

const BasicJamInfo = () => {
  const visibilityOptions = ['Private', 'Public'];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'visibility',
    defaultValue: 'Public'
  });

  const radioCards = visibilityOptions.map(option => ( 
    <RadioCard {...getRadioProps()} key={option}>{option}</RadioCard>
  ));

  return (
    <Stack {...getRootProps}>
      <FormControl>
        <FormLabel>Jam name</FormLabel>
        <Input type='text' />
      </FormControl>
      <FormControl>
        <FormLabel>Summary</FormLabel>
        <Input type='text' />
      </FormControl>
      <FormControl>
        <FormLabel>Description</FormLabel>
        <Textarea />
      </FormControl>
      <FormControl>
        <FormLabel>Visibility</FormLabel>
        {radioCards}
      </FormControl>
    </Stack>
  );
};

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
        <BasicJamInfo />
      </Container>
    </Container>
  );
};

export default Home;
