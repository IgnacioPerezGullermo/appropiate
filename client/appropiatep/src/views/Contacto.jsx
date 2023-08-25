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
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { UilCheck, UilMoon, UilSun } from '@iconscout/react-unicons';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { redirect, useNavigate } from 'react-router-dom';
import { Resend } from 'resend';
import LogoMain from '../assets/AppBackgroundless.png';
import Logo from '../assets/logo.svg';
import { Footer } from '../components/Footer/Footer';
import { Map } from '../components/Map/Map';
import { NavBar } from '../components/NavBar';

export const Contacto = ({ onOpen }) => {
  const [Logged, setLogged] = React.useState(false);
  const btnRef = React.useRef();

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      telephone: '',
      email: '',
      income: '',
    },
    validate: (values) => {
      const errors = {};
      return errors;
    },
    onSubmit: (values, actions) => {
      const info = {
        firstname: values.firstname, //listo
        lastname: values.lastname, //listo
        telephone: values.telephone, //listo
        email: values.email, //listo
        income: values.income, //listo
      };
      const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);
      resend.emails.send({
        from: info.email,
        to: 'nacho71197@gmail.com',
        subject: 'Solicitud de asesoramiento',
        html: `<p>Envio de prueba de ${info.firstname} ${info.lastname}</p>`,
      });
      //dispatch(registerPropierty(property));
    },
  });
  const GoogleApiKEY = import.meta.env.VITE_MAPS_API_KEY;
  console.log(GoogleApiKEY);
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
          h={'xl'}
          top={'15vh'}
          pl={'18vw'}
          pr={'18vw'}
        >
          <Center mt={'3vh'}>
            <Text
              fontSize={'3xl'}
              color={'primary'}
              textTransform={'uppercase'}
              fontWeight={'bold'}
            >
              Accede a tu reunión de <br /> diagnostico sin costo
            </Text>
          </Center>
          {''}

          <Center mt={'1vh'}>
            <form>
              <HStack p={0}>
                <FormLabel w={'100%'} mt={2} color={color} ml={4}>
                  Nombre
                </FormLabel>
                <FormLabel w={'100%'} color={color}>
                  Precio
                </FormLabel>
              </HStack>
              <HStack>
                <Input
                  type="text"
                  variant={'outline'}
                  name="firstname"
                  bg={'blackAlpha.50'}
                  rounded={'full'}
                  color={color}
                  focusBorderColor={'primary'}
                  size={'md'}
                  w={'100%'}
                  mb={'1vh'}
                  mt={2}
                  onReset={formik.handleReset}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstname}
                />
                <Input
                  type="text"
                  variant={'outline'}
                  name="lastname"
                  bg={'blackAlpha.50'}
                  rounded={'full'}
                  color={color}
                  focusBorderColor={'primary'}
                  size={'md'}
                  w={'100%'}
                  mb={'1vh'}
                  onReset={formik.handleReset}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastname}
                />
              </HStack>
              <FormLabel w={'100%'} mt={2} color={color} ml={4}>
                Tu Telefono
              </FormLabel>
              <Input
                type="text"
                variant={'outline'}
                name="telephone"
                bg={'blackAlpha.50'}
                rounded={'full'}
                color={color}
                focusBorderColor={'primary'}
                size={'md'}
                w={'100%'}
                mb={'1vh'}
                onReset={formik.handleReset}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.telephone}
              />
              <FormLabel w={'100%'} mt={2} color={color} ml={4}>
                Tu correo electronico
              </FormLabel>
              <Input
                type="text"
                variant={'outline'}
                name="email"
                bg={'blackAlpha.50'}
                rounded={'full'}
                color={color}
                focusBorderColor={'primary'}
                size={'md'}
                w={'100%'}
                mb={'1vh'}
                onReset={formik.handleReset}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              <FormLabel w={'100%'} mt={2} color={color} ml={4}>
                ¿Cuál es tu ingreso mensual?
              </FormLabel>
              <Input
                type="text"
                variant={'outline'}
                name="firstname"
                bg={'blackAlpha.50'}
                rounded={'full'}
                color={color}
                focusBorderColor={'primary'}
                size={'md'}
                w={'100%'}
                mb={'3vh'}
                onReset={formik.handleReset}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstname}
              />
              <Center cursor={'pointer'}>
                <Button
                  cursor={'pointer'}
                  rounded={'full'}
                  bg={'primary'}
                  w={32}
                  color={bgButton}
                  justifyItems={'space-around'}
                  onClick={() => {
                    setFilterAction(true);
                  }}
                >
                  Enviar
                </Button>
              </Center>
            </form>
          </Center>
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
        top={'100vh'}
        bg={bgBanner}
        bgRepeat={'no-repeat'}
        bgSize={'cover'}
        w={'full'}
        left={'0vw'}
        h={'container.xl'}
      >
        <Box w={'full'} h={'160vh'} py={'4'} mt={8}>
          <Heading color={'primary'} textAlign={'center'} mb={'7'}>
            ¿Donde estamos?
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
              Conoce la ubicación de nuestra oficina
            </Text>
            <Box
              w={'lg'}
              h={'xs'}
              bg={'black'}
              borderTopLeftRadius={'3xl'}
              borderBottomRightRadius={'3xl'}
              mb={2}
            ></Box>
            <Text fontSize={'2xl'} px={'44'} mb={8} textAlign={'center'}>
              Conoce la ubicación de nuestra oficina
            </Text>
            <Text
              color={'primary'}
              fontSize={'2xl'}
              px={'44'}
              mb={8}
              textAlign={'center'}
            >
              Calle Limache 1724, Oficina 710
            </Text>
          </Box>
        </Box>
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
        <Box
          w={'full'}
          h={'90%'}
          display={'flex'}
          flexDir={'column'}
          px={28}
          alignItems={'center'}
        >
          <Heading color={'primary'} textAlign={'center'} mb={'7'}>
            Nuestra ubicacion en Google Maps
          </Heading>
          <Box className="map-container" w={'80%'} h={'60%'} bg={'black'}>
            <Map />
          </Box>
        </Box>
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
