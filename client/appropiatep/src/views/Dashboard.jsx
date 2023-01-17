import { Box, Button, FormLabel, Input, Text } from '@chakra-ui/react';
import { Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authBrokerLogin } from '../redux/action';

export const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Box
      w={'100vw'}
      h={'100vh'}
      bgImage={
        'https://ak.picdn.net/offset/photos/5ff8d96c6f52af4409f72e7a/medium/offset_1073705.jpg'
      }
      bgRepeat={'no-repeat'}
      bgSize={'cover'}
      opacity={'0.9'}
    >
      <Box
        borderRadius={'15px'}
        pos={'absolute'}
        w={'30vw'}
        right={'35vw'}
        h={'40vh'}
        top={'25vh'}
        bg={'gray.800'}
        pl={'1vw'}
        pr={'1vw'}
        boxShadow={'17px 14px 33px -15px rgba(0,0,0,0.49)'}
      >
        <Text textAlign={'center'} fontSize={'2vw'} color={'blue.500'}>
          LOGO
        </Text>
        <Formik
          initialValues={{ username: '', password: '' }}
          validate={(values) => {
            const errors = {};
            return errors;
          }}
          onSubmit={(values, actions) => {
            const broker = {
              username: values.username,
              password: values.password,
            };
            dispatch(authBrokerLogin(broker), []);
            navigate('/panel');
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
          }) => (
            <form onSubmit={handleSubmit}>
              <FormLabel mt={'0.8em'} color={'blue.500'}>
                Nombre de Usuario
              </FormLabel>
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
              <FormLabel mt={'0.8em'} color={'blue.500'}>
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
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};
