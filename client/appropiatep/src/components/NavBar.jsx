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
  Wrap,
} from '@chakra-ui/react';
import {
  UilArrowLeft,
  UilMoon,
  UilSun,
  UilUserCircle,
} from '@iconscout/react-unicons';
import axios from 'axios';
import jwt from 'jwt-decode';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import DarkTitle from '../assets/AppDarkMode.png';
import LightTitle from '../assets/AppLightMode.png';
import fetchUf from '../hooks/fetchUF';
import { refreshInfo } from '../redux/auth/authAction';
import { getUFData } from '../redux/properties/propertiesAction';

const menuItems = [
  { title: 'Inicio', endpoint: '/', index: 0 },
  { title: 'Blog', endpoint: '/blog', index: 1 },
  { title: 'Asesorate', endpoint: '/appointment', index: 2 },
  { title: 'Oportunidades', endpoint: '/displaypropierty', index: 3 },
  { title: 'Ingresar', endpoint: '/login', index: 5 },
];

export const NavBar = ({
  btnRef,
  onOpen,
  Location,
  setLocation,
  PreviousPath,
  setPreviousPath,
  props,
}) => {
  const dispatch = useDispatch();
  const [Logged, setLogged] = React.useState(false);
  let localToken = localStorage.getItem('userToken');
  React.useEffect(() => {
    if (Logged === false && localToken !== null) {
      dispatch(getUFData());
      const decodedToken = jwt(localToken);
      console.log(decodedToken);
      if (decodedToken.id) {
        console.log('me despache');
        dispatch(refreshInfo(decodedToken.id));
        setLogged(true);
      }
    }
  }, [Logged]);
  const { userToken } = useSelector((state) => state.auth);
  let uf = fetchUf;
  console.log(uf);
  const ufValue = uf.Valor.slice(0, uf.Valor.length - 3);
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  const bgMain = useColorModeValue('white', 'black');
  const color = useColorModeValue('black', 'white');
  const bg = useColorModeValue('white', 'black');
  const bgToggle = useColorModeValue('gray.900', 'gray.200');
  const logo = useColorModeValue(LightTitle, DarkTitle);
  console.log(ufValue);
  return (
    <Box
      w={'full'}
      h={'12vh'}
      pos={'absolute'}
      display={'flex'}
      flexDirection={'row'}
      px={'10'}
      justifyContent={'space-around'}
      left={'0%'}
      top={'0%'}
      bg={
        Location === '/login' || Location === '/dashboard' ? 'transparent' : bg
      }
      textAlign={'left'}
      borderBottom={'3px solid'}
      borderColor={
        Location === '/login' || Location === '/dashboard'
          ? 'transparent'
          : 'primary'
      }
      overflow={'hidden'}
      zIndex={90}
    >
      <Wrap
        left={'5%'}
        h={'10.7vh'}
        top={'0%'}
        py={3}
        justifyContent={'flex-start '}
      >
        {menuItems.map((item) => {
          if (localToken && item.title === 'Ingresar') {
            return null;
          } else {
            return (
              <Button
                variant={'ghost'}
                color={Location === item.endpoint ? 'primary' : color}
                fontWeight={'medium'}
                fontSize={18}
                _hover={{ bg: 'transparent', color: 'blue.400' }}
                size={'lg'}
                scale={Location === item.endpoint ? '120%' : null}
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
        <Stat justifyItems={'center'} py={4}>
          <StatLabel color={'primary'}>Valor UF ({uf.Fecha})</StatLabel>
          <StatNumber fontSize={20}>{Number(ufValue)} CLP$</StatNumber>
        </Stat>
      </Box>
      <Box bg={'transparent'} w={'12vw'} h={'8vh'}>
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
