// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react';
import * as ReactDOM from 'react-dom/client';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#9a395d',
    800: '#153e75',
    700: '#2a69ac',
  },
};
const paddings = {
  paddings: {
    100: '2vw',
  },
};

export const theme = extendTheme({ colors, paddings });
