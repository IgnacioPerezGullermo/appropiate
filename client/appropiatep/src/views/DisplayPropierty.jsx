import {
  Box,
  Circle,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { UilMoon, UilSun } from '@iconscout/react-unicons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PropiertyCard } from '../components/DisplayPropierty/Components/PropiertyCard.jsx';
import { PropiertyCards } from '../components/DisplayPropierty/Components/PropiertyCards.jsx';
import { NavBar } from '../components/NavBar.jsx';
import { UserDrawer } from '../components/UserDrawer/UserDrawer.jsx';

export const DisplayPropierty = ({ onClose, isOpen }) => {
  const [Logged, setLogged] = React.useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const bgButton = useColorModeValue('white', 'black');
  const btnRef = React.useRef();
  const bg = useColorModeValue('gray.200', 'gray.800');
  return (
    <Box
      pos={'absolute'}
      top={'0vh'}
      bg={bg}
      w={'full'}
      left={'0vw'}
      h={'100vh'}
    >
      <NavBar />
      <PropiertyCards />
      <Circle
        pos={'fixed'}
        bottom={'3vh'}
        left={'4vh'}
        border={'2px solid'}
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
