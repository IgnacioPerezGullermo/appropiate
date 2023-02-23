import {
  Box,
  Button,
  Center,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DarkTitle from '../../../assets/AppDarkMode.png';
import LightTitle from '../../../assets/AppLightMode.png';
import { registerUser } from '../../../redux/auth/authAction';

import React from 'react';

export const SigninForm = ({ Option, setOption, setLocation }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  );
  const successAction = (location) => {
    setPreviousPath('/login');
    setLocation(location);
    navigate(location);
  };
  const toast = useToast();
  React.useEffect(() => {
    if (success === true) {
      toast({
        title: 'Cuenta creada con exito',
        description: 'En instantes te redirigiremos',
        status: 'success',
        duration: 5000,
        isClosable: false,
        onCloseComplete: successAction(PreviousPath),
      });
    }
    if (success === false && error) {
      toast({
        title: 'Algo ha salido mal',
        description: error,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  }, [navigate, userInfo, success, Option]);
  const logo = useColorModeValue(LightTitle, DarkTitle);
  const bg = useColorModeValue('gray.100', 'gray.900');
  const bgMain = useColorModeValue('white', 'black');
  const color = useColorModeValue('black', 'white');
  const borderInput = useColorModeValue('gray.500', 'gray.400');
  const hoverButton = useColorModeValue({ bg: 'teal.200' }, { bg: 'primary' });
  const bgButton = useColorModeValue('primary', 'transparent');
  const formik = useFormik({
    initialValues: { username: '', password: '', email: '' },
    validate: (values) => {
      const errors = {};
      return errors;
    },
    onSubmit: (values, actions) => {
      const client = {
        username: values.username,
        email: values.email,
        password: values.password,
      };
      dispatch(registerUser(client));
    },
  });
  return (
    <Box
      w={'40vw'}
      h={'full'}
      bg={bgMain}
      pos={'absolute'}
      right={0}
      borderLeft={'4px'}
      borderColor={'primary'}
      zIndex={100}
    >
      <Box bg={'transparent'} w={'30vw'} h={'8vh'} mt={'10vh'} ml={'4vw'}>
        <Image src={logo} objectFit={'cover'} />
      </Box>
      <Box paddingInline={16} mt={'12vh'} ml={'9vh'} w={'30vw'}>
        <form onSubmit={formik.handleSubmit}>
          <FormLabel color={'primary'}>Nombre de Usuario</FormLabel>
          <Input
            type="text"
            name="username"
            variant={'outline'}
            borderColor={borderInput}
            bg={bg}
            mb={'1vh'}
            color={color}
            focusBorderColor={'primary'}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.usename}
          />
          <FormLabel color={'primary'}>Email</FormLabel>
          <Input
            type="email"
            name="email"
            variant={'outline'}
            borderColor={borderInput}
            bg={bg}
            color={color}
            focusBorderColor={'primary'}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <FormLabel color={'primary'} mt={'0.8em'}>
            Password
          </FormLabel>
          <Input
            type="password"
            name="password"
            variant={'outline'}
            borderColor={borderInput}
            bg={bg}
            focusBorderColor={'primary'}
            color={color}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.errors.password &&
            formik.touched.password &&
            formik.errors.password}
          <Button
            mt={'2em'}
            type="submit"
            //disabled={isSubmitting}
            variant="outline"
            borderColor={'primary'}
            borderRadius={'full'}
            color={color}
            bg={bgButton}
            _hover={hoverButton}
            w={'90%'}
            ml={'5%'}
            size="md"
          >
            Submit
          </Button>
        </form>
        <Text mt={'8vh'} textAlign={'center'}>
          ¿Ya tienes una cuenta? <br />
        </Text>
        <Button
          variant={'ghost'}
          p={0}
          bg={'transparent'}
          color={'primary'}
          _hover={{ bg: 'trasnparent' }}
          ml={'35%'}
          onClick={() => {
            setOption('login');
          }}
        >
          Ingresa Aqui{' '}
        </Button>
      </Box>
    </Box>
  );
};
