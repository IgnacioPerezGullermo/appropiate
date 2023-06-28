import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Circle,
  HStack,
  Heading,
  Highlight,
  Image,
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
import { redirect, useNavigate } from 'react-router-dom';
import LogoMain from '../assets/AppBackgroundless.png';
import Logo from '../assets/logo.svg';
import { PropiertyCards } from '../components/DisplayPropierty/Components/PropiertyCards';
import { Footer } from '../components/Footer/Footer';
import { NavBar } from '../components/NavBar';
import { UserDrawer } from '../components/UserDrawer/UserDrawer';
import fetchComunas from '../hooks/fecthComunas';
import { refreshInfo, registerUser, userLogin } from '../redux/auth/authAction';
import numberWithCommas from '../utils/conversors';

export const Landing = ({ onOpen }) => {
  const [SliderValue, setSliderValue] = React.useState(1400000);
  const [FilterAction, setFilterAction] = React.useState(false);
  const [Logged, setLogged] = React.useState(false);
  const btnRef = React.useRef();

  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  );
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
                  Ingresa tu
                </Text>
                <Text fontSize={'3xl'} color={'primary'}>
                  sueldo líquido
                </Text>
              </HStack>
            </Center>
            {''}

            <Center mt={'1vh'}>
              <HStack>
                <Text fontSize={'3xl'} textAlign={'center'} color={color}>
                  Encontramos el proyecto
                </Text>
                <Text fontSize={'3xl'} color={'primary'}>
                  apropiado
                </Text>
                <Text fontSize={'3xl'} textAlign={'center'} color={color}>
                  para ti
                </Text>
              </HStack>
            </Center>
            <Slider
              aria-label="slider-ex-1"
              min={700000}
              max={10000000}
              defaultValue={SliderValue}
              onChangeEnd={(val) => setSliderValue(val)}
              mt={'4vw'}
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
            <Text textAlign={'center'} fontSize={'2xl'} mt={'1vh'}>
              {numberWithCommas(SliderValue)}$
            </Text>
            <Text textAlign={'center'} fontSize={'lg'} mt={'1vh'}>
              * Resultados referenciales, calculados con crédito hipotecario
              estimado con 15% de pie a 30 años
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
        {FilterAction === true ? (
          <Circle
            pos={'static'}
            top={'17vh'}
            left={'4vh'}
            border={1}
            borderColor={'primary'}
            lineHeight={'base'}
            size={'6vh'}
            zIndex={0}
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
      <Box
        pos={'absolute'}
        top={'100vh'}
        bg={bgBanner}
        bgRepeat={'no-repeat'}
        bgSize={'cover'}
        zIndex={5}
        w={'full'}
        left={'0vw'}
        h={'container.lg'}
      >
        <Box
          bg={bgBanner}
          pos={'absolute'}
          w={'full'}
          h={'lg'}
          top={'0vh'}
          pl={'8vw'}
          pr={'8vw'}
          display={'flex'}
          flexDir={'row'}
        >
          <Box w={'50%'} display={'flex'} flexDir={'column'} py={28}>
            <Box bg={'transparent'} w={'26vw'} h={'8vh'} mb={8}>
              <Image src={LogoMain} objectFit={'cover'} />
            </Box>
            <Heading color={'primary'} ml={4} mb={2} size={'xl'}>
              Más que de propiedades,
              <br /> se trata de tu proyecto de vida
            </Heading>
            <Box display={'flex'} flexDir={'row'} ml={4}>
              <Text fontSize={'xl'} color={color}>
                Somos{' '}
              </Text>
              <Text fontSize={'xl'} color={'primary '} ml={1} mr={1}>
                {' '}
                tu forma{' '}
              </Text>
              <Text fontSize={'xl'}> de invertir en propiedades.</Text>
            </Box>
          </Box>
          <Box w={'50%'} py={'28'} px={'20'}>
            <Box
              bg={'teal.200'}
              w={'md'}
              h={'2xs'}
              borderBottomRightRadius={'3vw'}
              borderTopLeftRadius={'3vw'}
            ></Box>
          </Box>
        </Box>
        <Box
          bg={bgBanner}
          pos={'absolute'}
          w={'full'}
          h={'xl'}
          top={'60vh'}
          pl={'8vw'}
          pr={'8vw'}
        >
          <Box
            w={'full'}
            display={'flex'}
            flexDir={'row'}
            justifyContent={'center'}
            mt={20}
          >
            <Heading color={color} mr={3}>
              Nuestro
            </Heading>
            <Heading color={'primary'}>Proposito</Heading>
          </Box>
          <Box w={'full'} h={'xl'} display={'flex'} flexDir={'row-reverse'}>
            <Box
              w={'50%'}
              h={'sm'}
              display={'flex'}
              flexDir={'column'}
              py={20}
              pr={12}
            >
              <Box mb={6} mt={6}>
                <Heading color={'primary'} size={'lg'} mb={2}>
                  Te ayudamos
                </Heading>
                <Text fontSize={'xl'} color={color}>
                  Nuestro proposito es ayudarte a cumplir tu sueño de comprar
                  una propiedad
                </Text>
              </Box>
              <Box>
                <Heading color={'primary'} size={'lg'} mb={2}>
                  Reuniones
                </Heading>
                <Text fontSize={'xl'} color={color}>
                  <Highlight
                    query={'conceptos financieros inmobiliarios'}
                    styles={{ color: 'primary' }}
                  >
                    Aplica para una reunión de análisis para tu objetivo
                    habitacional o de inversión.
                  </Highlight>
                </Text>
              </Box>
            </Box>
            <Box w={'50%'} py={'20'} px={'2'}>
              <Box
                bg={'teal.200'}
                w={'80%'}
                h={'xs'}
                borderBottomRightRadius={'3vw'}
                borderTopLeftRadius={'3vw'}
              ></Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        pos={'absolute'}
        top={'234vh'}
        bg={bgBanner}
        bgRepeat={'no-repeat'}
        bgSize={'cover'}
        w={'full'}
        left={'0vw'}
        h={'container.xl'}
      >
        <Box
          w={'full'}
          h={'2xs'}
          display={'flex'}
          flexDir={'row'}
          px={28}
          mt={2}
        >
          <Box w={'50%'} pr={'20'}>
            <Box>
              <Heading color={'primary'} size={'lg'} mb={2}>
                Analizamos
              </Heading>
              <Text fontSize={'xl'} color={color} textAlign={'justify'}>
                <Highlight
                  query={'conceptos financieros inmobiliarios'}
                  styles={{ color: 'primary' }}
                >
                  Para ellos, realizamos un análisis inicial, que nos permite
                  identificar tu situación actual y tu objetivo, para luego
                  elaborar paso a paso que te permita alcanzarlo de la mejor
                  manera posible
                </Highlight>
              </Text>
            </Box>
          </Box>
          <Box w={'50%'} pr={'20'}>
            <Box>
              <Heading color={'primary'} size={'lg'} mb={2}>
                Diseñamos
              </Heading>
              <Text fontSize={'xl'} color={color} textAlign={'justify'}>
                <Highlight
                  query={'conceptos financieros inmobiliarios'}
                  styles={{ color: 'primary' }}
                >
                  En Appropiate.cl diseñamos tu estrategia de compra de un bien
                  raíz, de manera altamente personalizada, al mismo tiempo que
                  aprenderas conceptos financieros inmobiliarios en el proceso.
                </Highlight>
              </Text>
            </Box>
          </Box>
        </Box>
        <Box w={'full'} h={'xl'} py={'4'}>
          <Heading color={color} textAlign={'center'} mb={'7'}>
            <Highlight query={'te ayudamos'} styles={{ color: 'primary' }}>
              ¿Como te ayudamos?
            </Highlight>
          </Heading>
          <Box w={'full'} h={'90%'} display={'flex'} flexDir={'row'} px={28}>
            <Box w={'70%'} h={'full'} py={'10'} pr={20}>
              <Text fontSize={'2xl'} textAlign={'justify'} mb={'4'}>
                <Highlight
                  query={[
                    'Appropiate.cl',
                    'tu estrategia',
                    'educación financiera inmobiliaria',
                    'diagnóstico inicial',
                    'situación actual',
                    'objetivo',
                  ]}
                  styles={{ color: 'primary' }}
                >
                  En Appropiate.cl diseñamos tu estrategia de compra de
                  propiedades de manera altamente personalizada, al mismo tiempo
                  que incluimos contenido de educación financiera inmobiliaria
                  en el proceso.
                </Highlight>
              </Text>
              <Text fontSize={'2xl'} textAlign={'justify'} mb={'4'}>
                <Highlight
                  query={[
                    'Appropiate.cl',
                    'tu estrategia',
                    'educación financiera inmobiliaria',
                    'diagnóstico inicial',
                    'situación actual',
                    'objetivo',
                  ]}
                  styles={{ color: 'primary' }}
                >
                  Para ello, hacemos un diagnostico inicial sin costo, que nos
                  permite identificar tu situacion y tu objetivo, para luego
                  elaborar el paso a paso que te permita lograrlo.
                </Highlight>
              </Text>
              <Box w={'full'} h={'40%'} display={'flex'} flexDir={'row'}>
                <Text fontSize={'8vw'} color={'primary'}>
                  70+
                </Text>
                <Text fontSize={'2.3vw'} fontWeight={'bold'} py={'14'} ml={5}>
                  Proyectos disponibles a lo largo de Chile
                </Text>
              </Box>
            </Box>
            <Box w={'30%'} h={'full'} px={10} py={10}>
              <Box w={'full'} h={'full'} bg={'black'} rounded={'3xl'}></Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        pos={'absolute'}
        top={'344vh'}
        bg={bgBanner}
        bgRepeat={'no-repeat'}
        bgSize={'cover'}
        w={'full'}
        left={'0vw'}
        h={'container.xl'}
      >
        <Box w={'full'} h={'xl'} py={'4'}>
          <Heading color={color} textAlign={'center'} mb={'7'}>
            <Highlight query={'elegirnos'} styles={{ color: 'primary' }}>
              ¿Porqué elegirnos?
            </Highlight>
          </Heading>
          <Box
            w={'full'}
            h={'90%'}
            display={'flex'}
            flexDir={'row-reverse'}
            px={28}
          >
            <Box w={'70%'} h={'full'} py={'10'} pl={16} pr={10}>
              <Text fontSize={'4xl'} color={'primary'} mb={8}>
                Te asesoramos en todo el proceso...
              </Text>
              <Text fontSize={'2xl'} textAlign={'justify'} mb={'4'}>
                <Highlight
                  query={['objetivo', 'propiedades', 'para los compradores']}
                  styles={{ color: 'primary' }}
                >
                  Conocemos en detalle cómo funciona el mercado inmobiliario, de
                  las opciones disponibles seleccionamos las que te permitan
                  alcanzar tu objetivo. No buscamos compradores para las
                  propiedades sino propiedades para los compradores.
                </Highlight>
              </Text>
              <Text fontSize={'2xl'} textAlign={'justify'} mb={'4'}>
                <Highlight
                  query={'beneficios especiales y exclusivos'}
                  styles={{ color: 'primary' }}
                >
                  Negociamos con las inmobiliarias beneficios especiales y
                  exclusivos, para que logres acceder a la compra de tu
                  propiedad, aunque cuentes con pocos ahorros para el pie.
                </Highlight>
              </Text>
              <Text fontSize={'2xl'} textAlign={'justify'} mb={'4'}>
                <Highlight
                  query={'No te cobramos comisión'}
                  styles={{ color: 'primary' }}
                >
                  No te cobramos comisión de intermediación ni corretaje.
                </Highlight>
              </Text>
            </Box>
            <Box w={'30%'} h={'full'} px={10} py={10}>
              <Box w={'full'} h={'full'} bg={'black'} rounded={'3xl'}></Box>
            </Box>
          </Box>
        </Box>
        <Box w={'full'} h={'xl'} py={'4'} mt={8}>
          <Heading color={color} textAlign={'center'} mb={'7'}>
            <Highlight query={'un plan para ti'} styles={{ color: 'primary' }}>
              Creamos un plan para ti
            </Highlight>
          </Heading>
          <Box
            w={'full'}
            h={'90%'}
            display={'flex'}
            flexDir={'column'}
            px={28}
            alignItems={'center'}
          >
            <Text fontSize={'2xl'} px={'44'} mb={8} textAlign={'center'}>
              <Highlight
                query={['Agenda ahora tu reunión', 'brokers expertos']}
                styles={{ color: 'primary' }}
              >
                Creamos un plan personalizado de compra de bienes raíces para
                ti. Agenda ahora tu reunión de diagnóstico sin costo con uno de
                nuestros brokers expertos en propiedades, planificación y
                financiamiento.
              </Highlight>
            </Text>
            <Box
              w={'md'}
              h={'2xs'}
              bg={'black'}
              borderTopLeftRadius={'3xl'}
              borderBottomRightRadius={'3xl'}
            ></Box>
          </Box>
        </Box>
      </Box>
      <Box
        pos={'absolute'}
        top={'500vh'}
        bg={'red.300'}
        bgRepeat={'no-repeat'}
        bgSize={'cover'}
        w={'full'}
        left={'0vw'}
        h={'container.sm'}
      >
        <Footer position={'160vh'} />
      </Box>
    </>
  );
};
