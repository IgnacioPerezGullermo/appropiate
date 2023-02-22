import {
  Box,
  Button,
  Circle,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Input,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  useToast
} from '@chakra-ui/react';
import { UilMoon, UilSun } from '@iconscout/react-unicons';
import { Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { UserDrawer } from '../components/UserDrawer/UserDrawer';
import { registerUser, userLogin } from '../redux/auth/authAction';

export const Landing = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  );
  const { colorMode, toggleColorMode } = useColorMode();
  const bgButton = useColorModeValue('white', 'black');
  return (
    <Box
      pos={'absolute'}
      top={'0vh'}
      bgImage={
        'https://ak.picdn.net/offset/photos/5ff8d96c6f52af4409f72e7a/medium/offset_1073705.jpg'
      }
      bgRepeat={'no-repeat'}
      bgSize={'cover'}
      w={'100vw'}
      left={'0vw'}
      h={'100vh'}
    >
      <UserDrawer
        isOpen={isOpen}
        onClose={onClose}
        username={userInfo?.username}
        email={userInfo?.email}
        userId={userInfo?.id}
        createdAt={userInfo?.createdAt}
      />
      <NavBar btnref={btnRef} onOpen={onOpen} location={'landing'} />
      {/* <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button> */}
      <Box
        bg={'blackAlpha.600'}
        pos={'absolute'}
        w={'100vw'}
        h={'35vh'}
        top={'40vh'}
        pl={'18vw'}
        pr={'18vw'}
      >
        <Text fontSize={'3.5vw'} textAlign={'center'} color={'blue.300'}>
          ¿Quieres <strong>invertir</strong> pero no sabes cómo sacar el{' '}
          <strong>máximo</strong> provecho?
        </Text>
        <Button
          w={'10vw'}
          h={'8vh'}
          position={'absolute'}
          top={'22vh'}
          left={'45vw'}
          borderRadius={'xl'}
          bg={'primary'}
          color={'white'}
          _hover={{
            bg: 'blue.400',
            transform: 'scale(1.2)',
            transition: '500ms',
          }}
          onClick={onOpen}
          ref={btnRef}
        >
          Regístrate ya!
        </Button>
      </Box>
      <Circle
        pos={'fixed'}
        bottom={'3vh'}
        left={'4vh'}
        border={1}
        borderColor={'primary'}
        lineHeight={'base'}
        size={'6vh'}
        bg={bgButton}
        onClick={() => {
          toggleColorMode('dark');
        }}
        _hover={colorMode === 'light' ? { bg: 'gray.100' } : { bg: 'gray.900' }}
      >
        {colorMode === 'light' ? (
          <UilMoon size="30" color={'#19C8C4'} />
        ) : (
          <UilSun size="30" color={'#19C8C4'} />
        )}
      </Circle>
    </Box>
  );
};
