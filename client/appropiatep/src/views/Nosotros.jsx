import {
  Box,
  Button,
  Center,
  Circle,
  FormLabel,
  HStack,
  Heading,
  Highlight,
  Image,
  Input,
  Text,
  VStack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { UilCheck, UilMoon, UilSun } from '@iconscout/react-unicons';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { redirect, useNavigate } from 'react-router-dom';
import LogoMain from '../assets/AppBackgroundless.png';
import Logo from '../assets/logo.svg';
import { Footer } from '../components/Footer/Footer';
import { Map } from '../components/Map/Map';
import { NavBar } from '../components/NavBar';

export const Nosotros = ({ onOpen }) => {
  const [Logged, setLogged] = React.useState(false);
  const btnRef = React.useRef();
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('gray.300', 'gray.800');
  const bgButton = useColorModeValue('gray.200', 'black');
  const bgSearchButton = useColorModeValue('primary', 'transparent');
  const hoverButton = useColorModeValue({ bg: 'teal.200' }, { bg: 'primary' });
  const color = useColorModeValue('black', 'white');
  const bgBanner = useColorModeValue('white', 'gray.700');
  const labelStyles = {
    mt: '2',
    ml: '-5',
    fontSize: 'sm',
    color: color,
  };
  return (
    <>
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
        <NavBar onOpen={onOpen} />
        <Box
          bg={bgBanner}
          pos={'absolute'}
          w={'full'}
          h={'250vh'}
          top={'20vh'}
          pl={'12vw'}
          pr={'12vw'}
        >
          <Heading
            color={'primary'}
            fontSize={'4xl'}
            textAlign={'center'}
            mt={4}
          >
            Nuesta Historia
          </Heading>
          <Text textAlign={'center'} mt={4} fontSize={'xl'}>
            Appropiate.cl nace de la idea de ayudar a más personas a convertirse
            en propietarios .
          </Text>
          <Box display={'flex'} flexDir={'row'} w={'100%'} h={'100%'} mt={12}>
            <VStack h={'100%'} bg={'red.200'} w={'40%'} spacing={24}>
              <Box
                w={'100%'}
                h={'xs'}
                bg={'black'}
                borderTopLeftRadius={'3xl'}
                borderBottomRightRadius={'3xl'}
                mb={2}
              ></Box>
              <Box
                w={'100%'}
                h={'xs'}
                bg={'black'}
                borderTopLeftRadius={'3xl'}
                borderBottomRightRadius={'3xl'}
                mb={2}
              ></Box>
              <Box
                w={'100%'}
                h={'xs'}
                bg={'black'}
                borderTopLeftRadius={'3xl'}
                borderBottomRightRadius={'3xl'}
                mb={2}
              ></Box>
            </VStack>
            <VStack h={'100%'} bg={'green.200'} w={'60%'}>
              <Box w={'100%'} display={'flex'} flexDir={'row'} px={2}>
                <Circle bg={'primary'} h={6} w={6} mr={2}>
                  <UilCheck color={'#ffffff'} />
                </Circle>
                <Text fontSize={'lg'}>
                  El objetivo de Appropiate.cl es darle la oportunidad a los
                  jóvenes y a la clase media, de poder comprar propiedades con
                  valores más asequibles en proyectos ubicados en comunas que
                  estén en proceso de un alza importante de su plusvalía, que
                  les permita generar altos retornos por la valorización que va
                  adquiriendo el inmueble
                </Text>
              </Box>
              <Box w={'100%'} display={'flex'} flexDir={'row'} px={2}>
                <Circle bg={'primary'} h={6} w={6} mr={2}>
                  <UilCheck color={'#ffffff'} />
                </Circle>
                <Text fontSize={'lg'}>
                  Cinthya Oliva, su fundadora, compró su primera propiedad en el
                  año 2006 a la edad de 22 años al titularse de la universidad
                  como licenciada en educación.
                </Text>
              </Box>
              <Box w={'100%'} display={'flex'} flexDir={'row'} px={2}>
                <Circle bg={'primary'} h={6} w={6} mr={2}>
                  <UilCheck color={'#ffffff'} />
                </Circle>
                <Text fontSize={'lg'}>
                  Despues de unos años, al ponerla en venta para comprar otra
                  que se adaptara al crecimiento de su familia ,se dio cuenta
                  del gran aumento de precio del inmueble , lo que pudo utilizar
                  para el pie de su proxima vivienda . Luego en el año 2019 ,
                  buscando un cambio de comuna mas cercana a su trabajo,
                  comienza a profundizar en el mercado inmobiliario y junto con
                  su esposo , deciden dedicarse a la inversion inmobiliaria
                  adquiriendo primero uno , luego dos y posteriormente varios
                  departamentos de inversión.
                </Text>
              </Box>
              <Box w={'100%'} display={'flex'} flexDir={'row'} px={2}>
                <Circle bg={'primary'} h={6} w={6} mr={2}>
                  <UilCheck color={'#ffffff'} />
                </Circle>
                <Text fontSize={'lg'}>
                  Con las ganancias que van adquiriendo, mejoran de manera
                  considerable su calidad de vida lo que les permite cambiarse
                  de ciudad, cumplir su sueño de comprar la casa amplia que
                  ellos soñaban para su familia y lo más importante, ir
                  construyendo su camino hacia la anhelada libertad financiera.
                </Text>
              </Box>
            </VStack>
          </Box>
        </Box>
        <Circle
          pos={'fixed'}
          bottom={'3vh'}
          left={'4vh'}
          border={1}
          borderColor={'primary'}
          lineHeight={'base'}
          size={'6vh'}
          zIndex={10}
          bg={bgButton}
          cursor={'pointer'}
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
      <Box
        pos={'absolute'}
        top={'200vh'}
        bg={'transparent'}
        bgRepeat={'no-repeat'}
        bgSize={'cover'}
        w={'full'}
        left={'0vw'}
        h={'container.lg'}
      >
        <Footer position={'100vh'} />
      </Box>
      {/* <Box
        pos={'absolute'}
        top={'500vh'}
        bg={'red.300'}
        bgRepeat={'no-repeat'}
        bgSize={'cover'}
        w={'full'}
        left={'0vw'}
        h={'40vh'}
      ></Box> */}
    </>
  );
};
