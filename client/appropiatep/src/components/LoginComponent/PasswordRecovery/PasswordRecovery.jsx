import {
  Box,
  Button,
  Center,
  Divider,
  FormLabel,
  Heading,
  Image,
  Input,
  Spinner,
  Text,
  useColorModeValue,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DarkTitle from '../../../assets/AppDarkMode.png';
import LightTitle from '../../../assets/AppLightMode.png';

import React from 'react';
import {
  resetPassword,
  resetRecovery,
  resetState,
} from '../../../redux/users/usersAction';

export const PasswordRecovery = ({ Option, setOption }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();

  const { passwordResetSucess, passwordResetLoading, passwordResetError } =
    useSelector((state) => state.users);

  React.useEffect(() => {
    if (passwordResetSucess) {
      console.log(passwordResetSucess);
      toast({
        title: `Operacion Exitosa`,
        description: passwordResetSucess,
        status: 'success',
        duration: 5000,
        isClosable: false,
      });
      dispatch(resetState(null));
      setTimeout(() => {
        setOption('login');
      }, 500);
    }
    if (passwordResetSucess === false && passwordResetError) {
      console.log(passwordResetError);
      toast({
        title: 'Algo ha salido mal',
        description: passwordResetError,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  }, [passwordResetSucess, passwordResetError]);
  const logo = useColorModeValue(LightTitle, DarkTitle);
  const bg = useColorModeValue('gray.100', 'gray.900');
  const bgMain = useColorModeValue('white', 'black');
  const color = useColorModeValue('black', 'white');
  const borderInput = useColorModeValue('gray.500', 'gray.400');
  const hoverButton = useColorModeValue({ bg: 'teal.200' }, { bg: 'primary' });
  const bgButton = useColorModeValue('primary', 'transparent');
  const formik = useFormik({
    initialValues: { email: '' },
    validate: (values) => {
      const errors = {};
      return errors;
    },
    onSubmit: (values, actions) => {
      //console.log(values.email);
      dispatch(resetPassword(values.email));
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
      <Box paddingInline={16} mt={'18vh'} ml={'9vh'} w={'30vw'}>
        <form onSubmit={formik.handleSubmit}>
          <FormLabel color={'primary'}>
            Ingresa el mail asociado a tu cuenta
          </FormLabel>
          <Input
            type="text"
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
            {passwordResetLoading === null || passwordResetLoading === false ? (
              'Enviar'
            ) : (
              <Spinner />
            )}
          </Button>
        </form>
        <Center>
          <VStack>
            <Button
              variant={'ghost'}
              p={0}
              mt={'8'}
              bg={'transparent'}
              color={'primary'}
              textAlign={'center'}
              _hover={{ bg: 'trasnparent' }}
              onClick={() => {
                setOption('login');
              }}
            >
              Regresar{' '}
            </Button>
          </VStack>
        </Center>
      </Box>
    </Box>
  );
};
