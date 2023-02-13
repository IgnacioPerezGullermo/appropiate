import {
  Box,
  Button,
  Heading,
  StackDivider,
  Text,
  VStack,
  Wrap,
} from '@chakra-ui/react';
import {
  UilCalendarAlt,
  UilDocumentLayoutRight,
  UilHome,
  UilSignout,
  UilUserPlus,
} from '@iconscout/react-unicons';
import React from 'react';

export const SideBar = ({ Option, setOption }) => {
  return (
    <Box
      h={'100vh'}
      w={'20vw'}
      bg={'gray.900'}
      pos={'absolute'}
      top={'0%'}
      left={'0%'}
    >
      <Heading mt={'2vw'} textAlign={'center'} color={'blue.500'}>
        Logo
      </Heading>
      <VStack
        spacing={3}
        h={'auto'}
        w={'18vw'}
        pos={'absolute'}
        top={'15%'}
        left={'4%'}
        justifyContent={'left'}
      >
        <Button
          id="dashboard"
          leftIcon={<UilHome />}
          variant="sidebarButton"
          bg={Option === 'dashboard' ? 'teal.400' : 'gray.900'}
          color={Option === 'dashboard' ? 'black' : 'white'}
          onClick={() => {
            setOption('dashboard');
          }}
        >
          Dashboard
        </Button>
        <Button
          leftIcon={<UilUserPlus />}
          variant="sidebarButton"
          bg={Option === 'createBroker' ? 'teal.400' : 'gray.900'}
          color={Option === 'createBroker' ? 'black' : 'white'}
          onClick={() => {
            setOption('createBroker');
          }}
        >
          Crear Broker
        </Button>
        <Button
          leftIcon={<UilDocumentLayoutRight />}
          variant="sidebarButton"
          bg={Option === 'blog' ? 'teal.400' : 'gray.900'}
          color={Option === 'blog' ? 'black' : 'white'}
          onClick={() => {
            setOption('blog');
          }}
        >
          Blog
        </Button>
        <Button
          leftIcon={<UilCalendarAlt />}
          variant="sidebarButton"
          bg={Option === 'appointments' ? 'teal.400' : 'gray.900'}
          color={Option === 'appointments' ? 'black' : 'white'}
          onClick={() => {
            setOption('appointments');
          }}
        >
          Asesorias
        </Button>
        <Button
          leftIcon={<UilUserPlus />}
          variant="sidebarButton"
          bg={Option === 'createPropierty' ? 'teal.400' : 'gray.900'}
          color={Option === 'createPropierty' ? 'black' : 'white'}
          onClick={() => {
            setOption('createPropierty');
          }}
        >
          Crear Propiedad
        </Button>{' '}
      </VStack>
      <Button
        variant="logoutButton"
        pos={'absolute'}
        bottom={'5%'}
        left={'35%'}
        // onClick={() => {
        //   setAdminLogged(false);
        // }}
      >
        <UilSignout />
      </Button>
    </Box>
  );
};
