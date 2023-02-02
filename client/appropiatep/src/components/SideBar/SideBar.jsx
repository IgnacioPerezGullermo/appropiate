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
      bg={'secondary'}
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
          bg={Option === 'dashboard' ? 'blue.600' : 'secondary'}
          color={Option === 'dashboard' ? 'whiteAlpha.900' : 'blackAlpha.900'}
          onClick={() => {
            setOption('dashboard');
          }}
        >
          Dashboard
        </Button>
        <Button
          leftIcon={<UilUserPlus />}
          variant="sidebarButton"
          bg={Option === 'createBroker' ? 'blue.600' : 'secondary'}
          color={
            Option === 'createBroker' ? 'whiteAlpha.900' : 'blackAlpha.900'
          }
          onClick={() => {
            setOption('createBroker');
          }}
        >
          Crear Broker
        </Button>
        <Button
          leftIcon={<UilDocumentLayoutRight />}
          variant="sidebarButton"
          bg={Option === 'blog' ? 'blue.600' : 'secondary'}
          color={Option === 'blog' ? 'whiteAlpha.900' : 'blackAlpha.900'}
          onClick={() => {
            setOption('blog');
          }}
        >
          Blog
        </Button>
        <Button
          leftIcon={<UilCalendarAlt />}
          variant="sidebarButton"
          bg={Option === 'appointments' ? 'blue.600' : 'secondary'}
          color={
            Option === 'appointments' ? 'whiteAlpha.900' : 'blackAlpha.900'
          }
          onClick={() => {
            setOption('appointments');
          }}
        >
          Asesorias
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
