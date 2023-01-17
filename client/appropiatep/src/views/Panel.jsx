import { Box } from '@chakra-ui/react';
import React from 'react';
import { SideBar } from '../components/SideBar/SideBar';

export const Panel = () => {
  return (
    <Box>
      <SideBar />
      <Box
        h={'100vh'}
        w={'80vw'}
        pos={'absolute'}
        top={'0%'}
        left={'20%'}
        bg={'gray.600'}
      ></Box>
    </Box>
  );
};
