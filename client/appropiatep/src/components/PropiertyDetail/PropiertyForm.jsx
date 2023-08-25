import {
  Box,
  Button,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  Text,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { PropiertyFormVal } from '../../utils/validations/PropiertyFormVal';

export const PropiertyForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
    },
    onSubmit: (values) => {
      //dispatch();
      console.log(values);
    },
    validate: (values) => {
      const result = PropiertyFormVal.safeParse(values);
      if (result.success) return;
      if (result.error.issues) {
        console.log(result.error.issues);
        const errors = {};
        result.error.issues.map((err) => {
          errors[err.path[0]] = err.message;
        });
        return errors;
      }
    },
  });
  return (
    <Box w={'50%'} bg={'gray.800'} rounded={'base'} px={8} py={4}>
      <Text
        textAlign={'center'}
        fontSize={'xl'}
        fontWeight={'medium'}
        color={'primary'}
        mb={4}
      >
        Dejanos tus datos y te contaremos mas de esta oportunidad
      </Text>
      <form onSubmit={formik.handleSubmit}>
        <Box>
          <InputGroup display={'flex'} flexDirection={'column'} mb={2}>
            <FormLabel>Mail</FormLabel>
            <Input
              name="email"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <Text color={'red.500'}>
              {' '}
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : null}
            </Text>
          </InputGroup>
          <InputGroup display={'flex'} flexDirection={'column'} mb={2}>
            <FormLabel>Nombre</FormLabel>
            <Input
              name="name"
              id="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            <Text color={'red.500'}>
              {' '}
              {formik.touched.name && formik.errors.name
                ? formik.errors.name
                : null}
            </Text>
          </InputGroup>
          <Button
            alignSelf={'end'}
            w={'full'}
            bg={'primary'}
            color={'white'}
            mt={4}
            _hover={{ bg: 'blue.300' }}
            disabled={!(formik.dirty && formik.isValid)}
            type="sumbit"
          >
            Enviar
          </Button>
        </Box>
      </form>
    </Box>
  );
};
