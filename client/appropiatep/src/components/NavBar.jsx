import {
  background,
  Box,
  Button,
  Circle,
  color,
  Image,
  Input,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  useColorMode,
  useColorModeValue,
  Wrap
} from '@chakra-ui/react';
import {
  UilArrowLeft,
  UilMoon,
  UilSun,
  UilUserCircle
} from '@iconscout/react-unicons';
import jwt from 'jwt-decode';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import DarkTitle from '../assets/AppDarkMode.png';
import LightTitle from '../assets/AppLightMode.png';
import { refreshInfo } from '../redux/auth/authAction';
import { infoUF } from '../redux/auth/nav';

const menuItems = [
  { title: 'Inicio', endpoint: '/', index: 0 },
  { title: 'Blog', endpoint: '/blog', index: 1 },
  { title: 'Asesorate', endpoint: '/appointment', index: 2 },
  { title: 'Oportunidades', endpoint: '/displaypropierty', index: 3 },
  { title: 'Register', endpoint: '/register', index: 4 },
  { title: 'Ingresar', endpoint: '/login', index: 5 },
];

export const NavBar = ({
  btnRef,
  onOpen,
  Location,
  setLocation,
  setLogged,
  PreviousPath,
  setPreviousPath,
  Logged,
  props,
}) => {
  const dispatch = useDispatch();
  let localToken = localStorage.getItem('userToken');
  React.useEffect(() => {
    if (Logged === false && localToken !== null) {
      localToken = jwt(localStorage.getItem('userToken'));
      console.log(localToken);
      if (localToken.id) {
        dispatch(refreshInfo(localToken.id));
        setLogged(true);
      }
    }
  }, [Logged]);
  const { userToken } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const { colorMode, toggleColorMode } = useColorMode();
  const bgMain = useColorModeValue('white', 'black');
  const color = useColorModeValue('black', 'white');
  const bg = useColorModeValue('white', 'black');
  const bgToggle = useColorModeValue('gray.900', 'gray.200');
  const logo = useColorModeValue(LightTitle, DarkTitle);
  const fecha = new Date();
  /*const AAAA = fecha.getFullYear();
  const MM = fecha.getMonth() + 1;
  const DD = fecha.getDate();
  console.log(AAAA, MM, DD);*/
  const date = Date.now();
  const today = new Date(date);

 
  return (
    <Box
      w={'full'}
      h={'12vh'}
      pos={'absolute'}
      left={'0%'}
      // display={Location === 'Ingresar' ? 'none' : null}
      top={'0%'}
      bg={Location === '/login' ? 'transparent' : bg}
      textAlign={'left'}
      borderBottom={'4px solid'}
      borderColor={Location === '/login' ? 'transparent' : 'primary'}
      overflow={'hidden'}
      zIndex={90}
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
          if (localToken && item.title === 'Ingresar') {
            return null;
          } else if (Location !== '/login') {
            return (
              <Button
                variant={'ghost'}
                color={Location === item.endpoint ? 'primary' : color}
                fontWeight={'medium'}
                fontSize={Location === item.endpoint ? 17 : 16}
                _hover={{ bg: 'transparent', color: 'blue.400' }}
                size={'lg'}
                scale={Location === item.endpoint ? '120%' : null}
                key={item.index}
                onClick={(e) => {
                  setPreviousPath(Location);
                  setLocation(item.endpoint);
                  navigate(item.endpoint);
                }}
              >
                {item.title}
              </Button>
            );
          }
        })}
        {localToken ? (
          <Circle
            border={1}
            ref={btnRef}
            borderColor={'primary'}
            lineHeight={'base'}
            size={'7vh'}
            bg={bg}
            onClick={onOpen}
            _hover={
              colorMode === 'light' ? { bg: 'gray.100' } : { bg: 'gray.900' }
            }
          >
            <UilUserCircle size="38" color={'#19C8C4'} />
          </Circle>
        ) : null}
      </Wrap>
      <Box>
      <Stat
          right={'-1200'}
          top={'4'}
          justifyItems={'center'}
          width={'10%'}
        >
          <StatLabel>Valor UF</StatLabel>
          <StatNumber>{infoUF}</StatNumber>
          <StatHelpText border={color}>{today.toDateString()}</StatHelpText>
        </Stat>
      </Box>
      <Box
          bg={'transparent'}
          w={'12vw'}
          h={'8vh'}
          pos={'absolute'}
          right={'12vw'}
          top={'1vh'}
        >
          <Image src={logo} objectFit={'cover'} />
      </Box>
      {Location === '/login' ? (
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
            setLocation(PreviousPath);
            navigate(PreviousPath);
          }}
        >
          {' '}
          Regresar
        </Button>
      ) : null}
    </Box>
  );
};
