import { Box, Button, FormLabel, Input } from '@chakra-ui/react';
import { Formik } from 'formik';
import React from 'react';

export const AppointmentForm = () => {
  return (
    <Box>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
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
    </Box>
  );
};
