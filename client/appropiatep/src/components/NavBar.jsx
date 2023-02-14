import { background, Box, Button, color, Text, Wrap } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  { title: 'Inicio', endpoint: '/', index: 0 },
  { title: 'Blog', endpoint: '/blog', index: 1 },
  { title: 'Asesorate', endpoint: '/appointment', index: 2 },
  { title: 'Oportunidades', endpoint: '/displaypropierty', index: 2 },
  { title: 'Ingresar', endpoint: '/login', index: 4 },
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
      bg={'gray.800'}
      textAlign={'left'}
      borderBottom={'4px solid'}
      borderColor={'primary'}
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
                fontWeight={'medium'}
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
                fontWeight={'medium'}
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
