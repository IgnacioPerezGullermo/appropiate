import {
  Box,
  Button,
  Center,
  FormLabel,
  Input,
  InputGroup,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { updatePassword, updateRecovery } from '../../redux/users/usersAction';

export const PasswordUpdate = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const userId = searchParams.get('id');
  const navigate = useNavigate();
  const { passwordUpdateSucess, passwordUpdateLoading, passwordUpdateError } =
    useSelector((state) => state.users);
  const toast = useToast();

  const handleReset = () => {
    dispatch(updateRecovery());
    setTimeout(() => {
      navigate('/login');
    }, 500);
  };
  React.useEffect(() => {
    if (passwordUpdateSucess) {
      console.log(passwordUpdateSucess);
      toast({
        title: `Operacion Exitosa`,
        description: passwordUpdateSucess,
        status: 'success',
        duration: 5000,
        isClosable: false,
        onCloseComplete: handleReset(),
      });
    }
    if (passwordUpdateSucess === false && passwordUpdateError) {
      console.log(passwordUpdateError);
      toast({
        title: 'Algo ha salido mal',
        description: passwordUpdateError,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  }, [passwordUpdateSucess, passwordUpdateError]);
  const validate = (values) => {
    const errors = {};
    if (!values.password) {
      errors.password = 'Agrega una contraseña';
    }

    if (!values.repeatPassword) {
      errors.repeatPassword = 'Repite la nueva contraseña';
    } else if (values.password !== values.repeatPassword) {
      errors.repeatPassword = 'Las contraseñas deben ser iguales';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      password: '',
      repeatPassword: '',
    },
    validate,
    onSubmit: (values) => {
      const data = {
        id: userId,
        password: values.password,
      };
      dispatch(updatePassword(data));
    },
  });
  return (
    <Box w={'full'} h={'full'} bg={'gray.800'}>
      <Text color={'primary'} textAlign={'center'} mt={'10%'} fontSize={'2xl'}>
        Cambio de contraseña
      </Text>
      <Center>
        <Box
          border={'1px'}
          borderColor={'primary'}
          rounded={'base'}
          w={'80'}
          mt={'4'}
          px={6}
          py={4}
        >
          <form onSubmit={formik.handleSubmit}>
            <InputGroup display={'flex'} flexDirection={'column'}>
              <FormLabel>Ingresa la nueva contraseña</FormLabel>
              <Input
                type="password"
                name="password"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </InputGroup>
            <Text color={'red.500'}>
              {' '}
              {formik.touched.password && formik.errors.password
                ? formik.errors.password
                : null}
            </Text>
            <InputGroup display={'flex'} flexDirection={'column'} mt={2}>
              <FormLabel>Repita la nueva contraseña</FormLabel>
              <Input
                type="password"
                name="repeatPassword"
                id="repeatPassword"
                value={formik.values.repeatPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </InputGroup>
            <Text color={'red.500'}>
              {formik.touched.repeatPassword && formik.errors.repeatPassword
                ? formik.errors.repeatPassword
                : null}
            </Text>
            <Button
              type="submit"
              disabled={!(formik.dirty && formik.isValid)}
              w={'full'}
              bg={'primary'}
              color={'white'}
              mt={4}
            >
              Enviar
            </Button>
          </form>
        </Box>
      </Center>
    </Box>
  );
};
