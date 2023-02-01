import { Box, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavBar } from '../components/NavBar';
import { UserDrawer } from '../components/UserDrawer/UserDrawer';
export const Home = () => {
  const { userInfo, authToken } = useSelector((state) => state.auth);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  //console.log(authInfo);
  return (
    <Box>
      <NavBar btnRef={btnRef} onOpen={onOpen} location={'home'} />
      <UserDrawer
        isOpen={isOpen}
        onClose={onClose}
        username={userInfo?.username}
        email={userInfo?.email}
        createdAt={userInfo?.createdAt}
      />
      <Box
        bg={'gray.600'}
        width={'100vw'}
        height={'88vh'}
        pos={'absolute'}
        top={'12vh'}
      ></Box>
    </Box>
  );
};
