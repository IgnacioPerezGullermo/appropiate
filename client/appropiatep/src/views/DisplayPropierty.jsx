import { Box, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PropiertyCard } from '../components/DisplayPropierty/Components/PropiertyCard.jsx';
import { PropiertyCards } from '../components/DisplayPropierty/Components/PropiertyCards.jsx';
import { NavBar } from '../components/NavBar.jsx';
import { UserDrawer } from '../components/UserDrawer/UserDrawer.jsx';

export const DisplayPropierty = () => {
  const { userInfo, authToken } = useSelector((state) => state.auth);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box
      pos={'absolute'}
      top={'0vh'}
      bg={'gray.400'}
      w={'100vw'}
      left={'0vw'}
      h={'100vh'}
    >
      <NavBar btnref={btnRef} onOpen={onOpen} location={'landing'} />
      <UserDrawer
        isOpen={isOpen}
        onClose={onClose}
        username={userInfo?.username}
        email={userInfo?.email}
        createdAt={userInfo?.createdAt}
      />
      <PropiertyCards />
    </Box>
  );
};
