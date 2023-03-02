'use client';

import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './ui/chakra';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);
