import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../components/NavBar';

export const Landing = () => {
  const navigate = useNavigate();
  return (
    <Box
      pos={'absolute'}
      top={'12vh'}
      bgImage={
        'https://ak.picdn.net/offset/photos/5ff8d96c6f52af4409f72e7a/medium/offset_1073705.jpg'
      }
      bgRepeat={'no-repeat'}
      bgSize={'cover'}
      w={'100vw'}
      left={'0vw'}
      h={'88vh'}
      bg
    >
      <Box
        bg={'blue.300'}
        pos={'absolute'}
        w={'100vw'}
        h={'35vh'}
        top={'25vh'}
        opacity={'0.8'}
        pl={'18vw'}
        pr={'18vw'}
      >
        <Text fontSize={'3.5vw'} textAlign={'center'}>
          ¿Quieres <strong>invertir</strong> pero no sabes cómo sacar el{' '}
          <strong>máximo</strong> provecho?
        </Text>
        <Button
          w={'10vw'}
          h={'8vh'}
          position={'absolute'}
          top={'22vh'}
          left={'45vw'}
          onClick={() => navigate('/register')}
        >
          Registrate ya!
        </Button>
      </Box>
    </Box>
  );
};
