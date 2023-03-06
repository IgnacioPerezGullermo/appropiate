import {
  Box,
  Button,
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
import { userLogin } from '../../../redux/auth/authAction';

import React from 'react';

export const LoginForm = ({
  Option,
  setOption,
  setLocation,
  PreviousPath,
  setPreviousPath,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  );
  const toast = useToast();
  React.useEffect(() => {
    if (success === true) {
      toast({
        title: `Bienvenido ${userInfo?.username}`,
        description: 'En momentos te redirigiremos al inicio',
        status: 'success',
        duration: 5000,
        isClosable: false,
        onCloseComplete: navigate('/'),
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
    initialValues: { username: '', password: '' },
    validate: (values) => {
      const errors = {};
      return errors;
    },
    onSubmit: (values, actions) => {
      const client = {
        username: values.username,
        password: values.password,
      };
      dispatch(userLogin(client));
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
            color={color}
            focusBorderColor={'primary'}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.usename}
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
        <Text mt={'18vh'} textAlign={'center'}>
          ¿Aun no estas registrado? <br />
        </Text>
        <Button
          variant={'ghost'}
          p={0}
          bg={'transparent'}
          ml={'13vh'}
          color={'primary'}
          textAlign={'center'}
          _hover={{ bg: 'trasnparent' }}
          onClick={() => {
            setOption('singin');
          }}
        >
          Crea tu cuenta{' '}
        </Button>
      </Box>
    </Box>
  );
};
