import { Button, Wrap, Box, Text, color, background } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  { title: 'Inicio', endpoint: '/' },
  { title: 'Perfil', endpoint: '/profile' },
  { title: 'Servicios', endpoint: '/services' },
  { title: 'Blog', endpoint: '/blog' },
  { title: 'Asesorate', endpoint: '/appointment' },
  { title: 'Registrate', endpoint: '/register' },
  { title: 'Ingresar', endpoint: '/login' },
];

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Box
      w={'100vw'}
      h={'12vh'}
      pos={'absolute'}
      left={'0%'}
      top={'0%'}
      borderBottom={'1px solid black'}
    >
      <Text pos={'absolute'} left={'5vw'} top={'1vh'} fontSize={'3vw'}>
        Logo
      </Text>
      <Wrap pos={'absolute'} right={'5%'} h={'10.7vh'} top={'0%'} pt={'3vh'}>
        {menuItems.map((item) => {
          return (
            <Button
              onClick={(e) => {
                navigate(item.endpoint);
              }}
            >
              {item.title}
            </Button>
          );
        })}
      </Wrap>
    </Box>
  );
};
