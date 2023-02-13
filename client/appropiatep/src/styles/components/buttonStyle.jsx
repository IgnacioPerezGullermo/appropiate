import { whiten } from '@chakra-ui/theme-tools';
export const ButtonStyles = {
  baseStyle: {},
  sizes: {},
  variants: {
    sidebarButton: {
      bg: 'secondary',
      color: 'black',
      width: '14vw',
      height: '6vh',
      fontFamily: 'body',
      letterSpacing: 'wide',
      fontWeight: 'medium',
      justifyContent: 'left',
      borderRadius: 'lg',
      _hover: { bg: 'teal.600', color: 'white' },
    },
    logoutButton: {
      bg: 'secondary',
      width: '5vw',
      height: '8vh',
      border: '1.4px solid black',
      borderRadius: '2xl',
      color: 'black',
      _hover: { bg: 'primary', color: 'white', border: 'none' },
    },
  },
  defaultProps: {},
};
