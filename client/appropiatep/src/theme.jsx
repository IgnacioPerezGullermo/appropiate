// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react';
import * as ReactDOM from 'react-dom/client';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#5C19CB',
    800: '#D3E5EF',
    700: '#2A809F',
  },
  paddings: {
    100: '3vw',
  },
};

export const theme = extendTheme({ colors });
