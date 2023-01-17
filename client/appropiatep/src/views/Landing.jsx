import {
  Box,
  Button,
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
  useDisclosure,
} from '@chakra-ui/react';
import { Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { authUserLogin, authUserSignin } from '../redux/action';

export const Landing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const authInfo = useSelector((state) => state.authInfo);
  const authToken = useSelector((state) => state.authToken);
  const [Option, setOption] = React.useState('signup');
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
      <NavBar btnref={btnRef} onOpen={onOpen} location={'landing'} />
      {/* <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button> */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={'gray.800'}>
          <DrawerCloseButton
            bg={'red.700'}
            color={'whiteAlpha.800'}
            focusBorderColor={'whiteAlpha.900'}
          />
          <DrawerHeader color={'blue.500'}>
            {Option === 'signup' ? 'Crea tu cuenta' : 'Ingresa aquí'}
          </DrawerHeader>
          <DrawerBody>
            {Option === 'signup' ? (
              <Formik
                initialValues={{ username: '', email: '', password: '' }}
                validate={(values) => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = 'Required';
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = 'Invalid email address';
                  }
                  return errors;
                }}
                onSubmit={(values, actions) => {
                  const client = {
                    username: values.username,
                    email: values.email,
                    password: values.password,
                  };
                  //console.log(client);
                  dispatch(authUserSignin(client), []);
                  navigate('/home');
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <form onSubmit={handleSubmit}>
                    <FormLabel color={'white'}>Nombre de Usuario</FormLabel>
                    <Input
                      type="text"
                      name="username"
                      borderColor={'whiteAlpha.300'}
                      bg={'whiteAlpha.200'}
                      color={'whiteAlpha.700'}
                      focusBorderColor={'blue.500'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.usename}
                    />
                    <FormLabel color={'white'} mt={'0.8em'}>
                      E-Mail
                    </FormLabel>
                    <Input
                      type="email"
                      name="email"
                      borderColor={'whiteAlpha.300'}
                      bg={'whiteAlpha.200'}
                      color={'whiteAlpha.700'}
                      focusBorderColor={'blue.500'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {
                      <Text
                        ml={'0.5vw'}
                        fontSize={'0.8em'}
                        mt={'1em'}
                        color={'whiteAlpha.800'}
                      >
                        {errors.email && touched.email && errors.email}
                      </Text>
                    }
                    <FormLabel color={'white'} mt={'0.8em'}>
                      Password
                    </FormLabel>
                    <Input
                      type="password"
                      name="password"
                      borderColor={'whiteAlpha.300'}
                      bg={'whiteAlpha.200'}
                      focusBorderColor={'blue.500'}
                      color={'whiteAlpha.700'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    {errors.password && touched.password && errors.password}
                    <Button
                      mt={'1.2em'}
                      type="submit"
                      disabled={isSubmitting}
                      colorScheme={'teal'}
                      w={'100%'}
                      size="md"
                    >
                      Submit
                    </Button>
                    <DrawerFooter
                      border={'1px solid black'}
                      pos={'absolute'}
                      bottom={'0%'}
                      width={'100%'}
                      left={'0%'}
                    >
                      <Button
                        width={'100%'}
                        colorScheme={'teal'}
                        onClick={() => {
                          setOption('login');
                        }}
                      >
                        Log In
                      </Button>
                    </DrawerFooter>
                  </form>
                )}
              </Formik>
            ) : (
              <Formik
                initialValues={{ username: '', password: '' }}
                validate={(values) => {
                  const errors = {};
                  return errors;
                }}
                onSubmit={(values, actions) => {
                  const client = {
                    username: values.username,
                    password: values.password,
                  };
                  //console.log(client);
                  dispatch(authUserLogin(client), []);
                  navigate('/home');
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <form onSubmit={handleSubmit}>
                    <FormLabel color={'white'}>Nombre de Usuario</FormLabel>
                    <Input
                      type="text"
                      name="username"
                      borderColor={'whiteAlpha.300'}
                      bg={'whiteAlpha.200'}
                      color={'whiteAlpha.700'}
                      focusBorderColor={'blue.500'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.usename}
                    />
                    <FormLabel color={'white'} mt={'0.8em'}>
                      Password
                    </FormLabel>
                    <Input
                      type="password"
                      name="password"
                      borderColor={'whiteAlpha.300'}
                      bg={'whiteAlpha.200'}
                      focusBorderColor={'blue.500'}
                      color={'whiteAlpha.700'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    {errors.password && touched.password && errors.password}
                    <Button
                      mt={'1.2em'}
                      type="submit"
                      disabled={isSubmitting}
                      colorScheme={'teal'}
                      w={'100%'}
                      size="md"
                    >
                      Submit
                    </Button>
                    <DrawerFooter
                      border={'1px solid black'}
                      pos={'absolute'}
                      bottom={'0%'}
                      width={'100%'}
                      left={'0%'}
                    >
                      <Button
                        width={'100%'}
                        colorScheme={'teal'}
                        onClick={() => {
                          setOption('signup');
                        }}
                      >
                        Sign Up
                      </Button>
                    </DrawerFooter>
                  </form>
                )}
              </Formik>
            )}
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Box
        bg={'brand.700'}
        pos={'absolute'}
        w={'100vw'}
        h={'35vh'}
        top={'40vh'}
        opacity={'0.8'}
        pl={'18vw'}
        pr={'18vw'}
      >
        <Text fontSize={'3.5vw'} textAlign={'center'}>
          ¿Quieres <strong>invertir</strong> pero no sabes cómo sacar el{' '}
          <strong>máximo</strong> provecho?
        </Text>
        <Button
          w={'10vw'}
          h={'8vh'}
          position={'absolute'}
          top={'22vh'}
          left={'45vw'}
          onClick={onOpen}
          ref={btnRef}
        >
          Regístrate ya!
        </Button>
      </Box>
    </Box>
  );
};
