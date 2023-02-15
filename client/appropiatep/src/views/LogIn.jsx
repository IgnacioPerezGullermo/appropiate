import {
  Box,
  Button,
  Circle,
  GridItem,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { UilArrowLeft, UilMoon, UilSun } from '@iconscout/react-unicons';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Back from '../assets/backgroundpanel.jpg';
import { LoginComponent } from '../components/LoginComponent/LoginComponent';
import { NavBar } from '../components/NavBar.jsx';

export const LogIn = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const bg = useColorModeValue('gray.200', 'gray.800');
  const bgMain = useColorModeValue('white', 'black');
  const color = useColorModeValue('black', 'white');
  return (
    <Box
      pos={'absolute'}
      top={'0vh'}
      bgRepeat={'no-repeat'}
      bgSize={'cover'}
      w={'100vw'}
      left={'0vw'}
      h={'100vh'}
      display={'grid'}
      gridTemplateAreas={`'image form'`}
      gridTemplateColumns={'60% 40%'}
    >
      <GridItem area={'image'}>
        <Box
          bgImage={Back}
          bgRepeat={'no-repeat'}
          bgSize={'cover'}
          w={'100%'}
          h={'100%'}
        >
          <Button
            pos={'absolute'}
            top={'4vh'}
            left={'4vh'}
            size={'lg'}
            borderRadius={'full'}
            bg={bgMain}
            color={color}
            borderColor={'primary'}
            _hover={{ color: 'primary' }}
            leftIcon={<UilArrowLeft />}
            onClick={() => {
              navigate('/');
            }}
          >
            {' '}
            Regresar
          </Button>
          <Circle
            pos={'absolute'}
            bottom={'4vh'}
            left={'4vh'}
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
        </Box>
      </GridItem>
      <LoginComponent />
    </Box>
  );
};
