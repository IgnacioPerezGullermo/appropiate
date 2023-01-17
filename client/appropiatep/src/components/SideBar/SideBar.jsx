import {
  Box,
  Button,
  StackDivider,
  Heading,
  Text,
  VStack,
  Wrap,
} from '@chakra-ui/react';
import React from 'react';

export const SideBar = () => {
  return (
    <Box
      h={'100vh'}
      w={'20vw'}
      bg={'gray.800'}
      pos={'absolute'}
      top={'0%'}
      left={'0%'}
    >
      <Heading mt={'2vw'} textAlign={'center'} color={'blue.500'}>
        Logo
      </Heading>
      <VStack
        spacing={1}
        h={'auto'}
        w={'18vw'}
        pos={'absolute'}
        top={'40%'}
        left={'4%'}
      >
        <Button
          width={'18vw'}
          height={'10vh'}
          m={0}
          borderRadius={'10px'}
          colorScheme={'blue'}
        >
          Inicio
        </Button>
        <Button
          width={'18vw'}
          height={'10vh'}
          m={0}
          borderRadius={'10px'}
          colorScheme={'blue'}
        >
          Crear Broker
        </Button>
        <Button
          width={'18vw'}
          height={'10vh'}
          m={0}
          borderRadius={'10px'}
          colorScheme={'blue'}
        >
          Blog
        </Button>
        <Button
          width={'18vw'}
          height={'10vh'}
          m={0}
          borderRadius={'10px'}
          colorScheme={'blue'}
        >
          Asesorias
        </Button>
        <Button
          width={'18vw'}
          height={'10vh'}
          m={0}
          borderRadius={'10px'}
          colorScheme={'blue'}
        >
          Log Out
        </Button>{' '}
      </VStack>
    </Box>
  );
};
