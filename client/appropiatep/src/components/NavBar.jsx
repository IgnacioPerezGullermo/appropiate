import { background, Box, Button, color, Text, Wrap } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  { title: 'Inicio', endpoint: '/' },
  { title: 'Blog', endpoint: '/blog' },
  { title: 'Asesorate', endpoint: '/appointment' },
  { title: 'Ingresar', endpoint: '/login' },
];

export const NavBar = ({ btnRef, onOpen, location }) => {
  const navigate = useNavigate();
  return (
    <Box
      w={'100vw'}
      h={'12vh'}
      pos={'absolute'}
      left={'0%'}
      top={'0%'}
      borderBottom={'1px solid black'}
      bg={'brand.800'}
      textAlign={'left'}
    >
      <Text pos={'absolute'} right={'5vw'} top={'1vh'} fontSize={'3vw '}>
        Logo
      </Text>
      <Wrap pos={'absolute'} left={'5%'} h={'10.7vh'} top={'0%'} pt={'3vh'}>
        {menuItems.map((item) => {
          if (item.title === 'Ingresar') {
            return (
              <Button colorScheme={'blue'} onClick={onOpen} ref={btnRef}>
                {location !== 'landing' ? 'Usuario' : 'Ingresar'}
              </Button>
            );
          } else {
            return (
              <Button
                onClick={(e) => {
                  navigate(item.endpoint);
                }}
              >
                {item.title}
              </Button>
            );
          }
        })}
      </Wrap>
    </Box>
  );
};
