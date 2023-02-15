import {
  background,
  Box,
  Button,
  Circle,
  color,
  Image,
  Text,
  useColorMode,
  useColorModeValue,
  Wrap
} from '@chakra-ui/react';
import { UilMoon, UilSun } from '@iconscout/react-unicons';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DarkTitle from '../assets/AppDarkMode.png';
import LightTitle from '../assets/AppLightMode.png';

const menuItems = [
  { title: 'Inicio', endpoint: '/', index: 0 },
  { title: 'Blog', endpoint: '/blog', index: 1 },
  { title: 'Asesorate', endpoint: '/appointment', index: 2 },
  { title: 'Oportunidades', endpoint: '/displaypropierty', index: 3 },
  { title: 'Register', endpoint: '/register', index: 4 },
  { title: 'Ingresar', endpoint: '/login', index: 5 }
];

export const NavBar = ({ btnRef, onOpen, location }) => {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('white', 'black');
  const bgToggle = useColorModeValue('gray.900', 'gray.200');
  const logo = useColorModeValue(LightTitle, DarkTitle);
  console.log(colorMode);
  return (
    <Box
      w={'100vw'}
      h={'12vh'}
      pos={'absolute'}
      left={'0%'}
      top={'0%'}
      bg={bg}
      textAlign={'left'}
      borderBottom={'4px solid'}
      borderColor={'primary'}
      overflow={'hidden'}
    >
      <Wrap
        pos={'absolute'}
        left={'5%'}
        h={'10.7vh'}
        top={'0%'}
        p={3}
        justifyContent={'center'}
      >
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
        <Circle
          border={1}
          borderColor={'primary'}
          lineHeight={'base'}
          size={'6vh'}
          bg={bg}
          onClick={() => {
            toggleColorMode('dark');
          }}
          _hover={
            colorMode === 'light' ? { bg: 'gray.100' } : { bg: 'gray.900' }
          }
        >
          {colorMode === 'light' ? (
            <UilMoon size="30" color={'#19C8C4'} />
          ) : (
            <UilSun size="30" color={'#19C8C4'} />
          )}
        </Circle>
      </Wrap>
      <Box
        bg={'red'}
        w={'12vw'}
        h={'8vh'}
        pos={'absolute'}
        right={'12vw'}
        top={'1vh'}
      >
        <Image src={logo} objectFit={'cover'} />
      </Box>
    </Box>
  );
};
