import { background, Box, Button, color, Text, Wrap } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  { title: 'Inicio', endpoint: '/', index: 0 },
  { title: 'Blog', endpoint: '/blog', index: 1 },
  { title: 'Asesorate', endpoint: '/appointment', index: 2 },
  { title: 'Ingresar', endpoint: '/login', index: 3 },
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
      bg={'whiteAlpha.900'}
      textAlign={'left'}
    >
      <Text pos={'absolute'} right={'5vw'} top={'1vh'} fontSize={'3vw '}>
        Logo
      </Text>
      <Wrap pos={'absolute'} left={'5%'} h={'10.7vh'} top={'0%'} pt={'3vh'}>
        {menuItems.map((item) => {
          if (item.title === 'Ingresar') {
            return (
              <Button
                variant={'ghost'}
                color="primary"
                size={'lg'}
                _hover={{ bg: 'transparent', color: 'blue.400' }}
                onClick={onOpen}
                ref={btnRef}
                key={item.index}
              >
                {location !== 'landing' ? 'Usuario' : 'Ingresar'}
              </Button>
            );
          } else {
            return (
              <Button
                variant={'ghost'}
                color="primary"
                _hover={{ bg: 'transparent', color: 'blue.400' }}
                size={'lg'}
                key={item.index}
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
