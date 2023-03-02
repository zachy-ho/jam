import { extendTheme } from '@chakra-ui/react';
import localFont from 'next/font/local';

const virgil = localFont({ src: '../../../public/Virgil.woff2' });

const theme = extendTheme({
  fonts: {
    heading: virgil.style.fontFamily,
    body: virgil.style.fontFamily,
  },
  breakpoints: {
    'sm': '30em',
    'md': '48em',
    'lg': '62em',
    'xl': '75em',
    '2xl': '90em',
  },
});

export { theme };
