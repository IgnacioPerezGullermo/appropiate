import { Box, Button, FormLabel, Heading, Input, Text } from '@chakra-ui/react';
import { Formik, useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { authBrokerSignin } from '../../../redux/action';

export const BrokerForm = ({ createdBroker, setBasicInfoState }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: { username: '', email: '', password: '' },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }
      return errors;
    },
    onSubmit: (values, actions) => {
      const client = {
        username: values.username,
        email: values.email,
        password: values.password,
        type: 'broker',
      };
      console.log(client);
      dispatch(authBrokerSignin(client), []);
      setBasicInfoState('sucess');
    },
  });
  return (
    <Box pl={4} pr={4} w={'100%'} h={'100%'}>
      <form onSubmit={formik.handleSubmit}>
        <Heading
          fontSize={26}
          color={'blue.400'}
          mb={'5vh'}
          textAlign={'center'}
        >
          Informacion Basica
        </Heading>
        <FormLabel fontSize={'2vh'} color={'white'}>
          Nombre de Usuario
        </FormLabel>
        <Input
          type="text"
          name="username"
          borderColor={'whiteAlpha.300'}
          bg={'whiteAlpha.200'}
          size={'md'}
          color={'whiteAlpha.700'}
          w={'100%'}
          mb={'3vh'}
          focusBorderColor={'blue.500'}
          onReset={formik.handleReset}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />
        <FormLabel fontSize={'2vh'} color={'white'} mt={'0.8em'}>
          E-Mail
        </FormLabel>
        <Input
          type="email"
          name="email"
          borderColor={'whiteAlpha.300'}
          bg={'whiteAlpha.200'}
          size={'md'}
          color={'whiteAlpha.700'}
          mb={'3vh'}
          focusBorderColor={'blue.500'}
          onReset={formik.handleReset}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {
          <Text
            ml={'0.5vw'}
            fontSize={'0.8em'}
            mt={'1em'}
            color={'whiteAlpha.800'}
          >
            {formik.errors.email && formik.touched.email && formik.errors.email}
          </Text>
        }
        <FormLabel fontSize={'2vh'} color={'white'} mt={'0.8em'}>
          Password
        </FormLabel>
        <Input
          type="password"
          name="password"
          borderColor={'whiteAlpha.300'}
          bg={'whiteAlpha.200'}
          size={'md'}
          focusBorderColor={'blue.500'}
          color={'whiteAlpha.700'}
          onReset={formik.handleReset}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.errors.password &&
          formik.touched.password &&
          formik.errors.password}
        <Button
          mt={'1.2em'}
          colorScheme={'teal'}
          w={'24%'}
          size="md"
          pos={'absolute'}
          bottom={'10vh'}
          right={'25vw'}
          onClick={() => {
            formik.resetForm();
          }}
        >
          Reiniciar
        </Button>
        <Button
          mt={'1.2em'}
          type="submit"
          disabled={formik.isSubmitting}
          colorScheme={'teal'}
          w={'24%'}
          size="md"
          pos={'absolute'}
          bottom={'10vh'}
          right={'5vw'}
        >
          Enviar
        </Button>
      </form>
    </Box>
  );
};
