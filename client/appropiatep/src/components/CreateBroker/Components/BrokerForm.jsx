import { Box, Button, FormLabel, Heading, Input, Text } from '@chakra-ui/react';
import { Formik, useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { authBrokerSignin } from '../../../redux/action';
import { registerBroker } from '../../../redux/brokers/brokersAction';
import { updateUsers } from '../../../redux/users/usersAction';

export const BrokerForm = ({
  createdBroker,
  SelectedUser,
  setBasicInfoState,
}) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      lastName: '',
      firstName: '',
      profilePicture: '',
    },
    validate: (values) => {
      const errors = {};
      return errors;
    },
    onSubmit: (values, actions) => {
      const broker = {
        lastName: values.lastName,
        firstName: values.firstName,
        profilePicture: values.profilePicture,
        userId: SelectedUser,
      };
      dispatch(registerBroker(broker), []);
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
        <FormLabel fontSize={'2vh'} color={'blue.400'}>
          Apellidos
        </FormLabel>
        <Input
          type="text"
          variant={'outline'}
          name="lastName"
          bg={'blackAlpha.50'}
          color={'black'}
          focusBorderColor={'blue.200'}
          size={'md'}
          w={'100%'}
          mb={'3vh'}
          onReset={formik.handleReset}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        <FormLabel fontSize={'2vh'} color={'blue.600'} mt={'0.8em'}>
          Nombres
        </FormLabel>
        <Input
          type="text"
          name="firstName"
          variant={'outline'}
          bg={'blackAlpha.50'}
          color={'black'}
          focusBorderColor={'blue.200'}
          size={'md'}
          mb={'3vh'}
          onReset={formik.handleReset}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
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
        <FormLabel fontSize={'2vh'} color={'blue.400'} mt={'0.8em'}>
          Foto de Perfil
        </FormLabel>
        <Input
          type="text"
          name="profilePicture"
          variant={'outline'}
          bg={'blackAlpha.50'}
          color={'black'}
          focusBorderColor={'blue.200'}
          size={'md'}
          onReset={formik.handleReset}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.profilePicture}
        />
        <Button
          mt={'1.2em'}
          bg={'blue.600'}
          color={'white'}
          w={'24%'}
          h={'6vh'}
          size="md"
          pos={'absolute'}
          bottom={'10vh'}
          right={'23vw'}
          _hover={{ bg: 'blue.400', color: 'white' }}
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
          bg={'blue.600'}
          color={'white'}
          h={'6vh'}
          w={'24%'}
          size="md"
          pos={'absolute'}
          bottom={'10vh'}
          right={'3vw'}
          _hover={{ bg: 'blue.400', color: 'white' }}
        >
          Enviar
        </Button>
      </form>
    </Box>
  );
};
