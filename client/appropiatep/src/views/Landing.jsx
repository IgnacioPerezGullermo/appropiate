import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Circle,
  HStack,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import {
  UilArrowLeft,
  UilDollarAlt,
  UilMoon,
  UilSun,
} from '@iconscout/react-unicons';
import { Formik } from 'formik';
import jwt from 'jwt-decode';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import { PropiertyCards } from '../components/DisplayPropierty/Components/PropiertyCards';
import { NavBar } from '../components/NavBar';
import { UserDrawer } from '../components/UserDrawer/UserDrawer';
import { refreshInfo, registerUser, userLogin } from '../redux/auth/authAction';
import numberWithCommas from '../utils/conversors';

export const Landing = ({ isOpen, onClose }) => {
  const [SliderValue, setSliderValue] = React.useState(1400000);
  const [FilterAction, setFilterAction] = React.useState(false);
  const [Logged, setLogged] = React.useState(false);

  const btnRef = React.useRef();

  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  );
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('gray.200', 'gray.800');
  const bgButton = useColorModeValue('white', 'black');
  const bgSearchButton = useColorModeValue('primary', 'transparent');
  const hoverButton = useColorModeValue({ bg: 'teal.200' }, { bg: 'primary' });
  const color = useColorModeValue('black', 'white');
  const bgBanner = useColorModeValue('gray.300', 'gray.700');
  const labelStyles = {
    mt: '2',
    ml: '-5',
    fontSize: 'sm',
    color: color,
  };
  return (
    <Box
      pos={'absolute'}
      top={'0vh'}
      bg={bg}
      bgRepeat={'no-repeat'}
      bgSize={'cover'}
      w={'full'}
      left={'0vw'}
      h={'container.md'}
    >
      {FilterAction === false ? (
        <Box
          bg={bgBanner}
          pos={'absolute'}
          w={'full'}
          h={'sm'}
          top={'30vh'}
          pl={'18vw'}
          pr={'18vw'}
        >
          <Center mt={'3vh'}>
            <HStack>
              <Text fontSize={'3xl'} textAlign={'center'} color={color}>
                Cuentanos tu
              </Text>
              <Text fontSize={'3xl'} color={'primary'}>
                capacidad de ahorro
              </Text>
            </HStack>
          </Center>
          {''}

          <Center mt={'1vh'}>
            <HStack>
              <Text fontSize={'3xl'} textAlign={'center'} color={color}>
                Nosotros encontramos el
              </Text>
              <Text fontSize={'3xl'} color={'primary'}>
                proyecto ideal para vos
              </Text>
            </HStack>
          </Center>
          <Slider
            aria-label="slider-ex-1"
            min={700000}
            max={10000000}
            defaultValue={SliderValue}
            onChangeEnd={(val) => setSliderValue(val)}
            mt={'5vw'}
            ml={'10%'}
            w={'80%'}
          >
            <SliderMark value={700000} {...labelStyles}>
              {numberWithCommas(700000)}
            </SliderMark>
            <SliderMark value={700000} {...labelStyles}>
              {numberWithCommas(700000)}
            </SliderMark>
            <SliderMark
              value={SliderValue}
              textAlign="center"
              bg={bg}
              color="primary"
              mt="-14"
              ml="-10"
              borderRadius={'full'}
              p="2"
              w="auto"
            >
              {numberWithCommas(SliderValue)}$
            </SliderMark>
            <SliderTrack boxSize={3}>
              <SliderFilledTrack bg={'primary'} />
            </SliderTrack>
            <SliderThumb boxSize={6}>
              <UilDollarAlt color={'#19C8C4'} />
            </SliderThumb>
          </Slider>
          <Text textAlign={'center'} fontSize={'2xl'} mt={'2vw'}>
            {numberWithCommas(SliderValue)}$
          </Text>
          <br />
          <Center cursor={'pointer'}>
            <Button
              cursor={'pointer'}
              onClick={() => {
                setFilterAction(true);
              }}
            >
              Buscar
            </Button>
          </Center>
        </Box>
      ) : null}
      {FilterAction === true ? (
        <Box
          pos={'absolute'}
          top={'0vh'}
          //bg={bg}
          w={'full'}
          h={'full'}
          mt={'2vh'}
          left={'0vw'}
        >
          {FilterAction === true ? (
            <PropiertyCards salary={SliderValue} />
          ) : null}
        </Box>
      ) : null}
      <Circle
        pos={'fixed'}
        bottom={'3vh'}
        left={'4vh'}
        border={1}
        borderColor={'primary'}
        lineHeight={'base'}
        size={'6vh'}
        bg={bgButton}
        cursor={'pointer'}
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
      {FilterAction === true ? (
        <Circle
          pos={'fixed'}
          top={'17vh'}
          left={'4vh'}
          border={1}
          borderColor={'primary'}
          lineHeight={'base'}
          size={'6vh'}
          bg={bgButton}
          cursor={'pointer'}
          onClick={() => {
            setFilterAction(false);
          }}
          _hover={
            colorMode === 'light' ? { bg: 'gray.100' } : { bg: 'gray.900' }
          }
        >
          <UilArrowLeft size={'40px'} color={'#19C8C4'} />
        </Circle>
      ) : null}
    </Box>
  );
};
