import { Box, FormLabel, Heading, Input } from '@chakra-ui/react';
import { Formik, useFormik } from 'formik';
import React from 'react';

export const CreateProperty = () => {
  const formik = useFormik({
    initialValues: {
      price: '',
      region: '',
      commune: '',
      bedr: '',
      bath: '',
      storage: '',
      parking: '',
      caprate: '',
      totalarea: '',
      deliverytype: '',
      inmob: '',
      projectname: '',
      stock: '',
    },
    validate: (values) => {
      const errors = {};
      return errors;
    },
    onSubmit: (values, actions) => {
      const property = {
        price: values.price, //listo
        region: values.region, //listo
        commune: values.commune, //listo
        bedr: values.bedr, //listo
        bath: values.bath, //listo
        storage: values.storage, //listo
        parking: values.parking, //listo
        caprate: values.caprate, //listo
        totalarea: values.totalarea, //listo
        deliverytype: values.deliverytype, //listo
        inmob: values.inmob, //listo
        projectname: values.projectname, //listo
        stock: values.stock, //listo
      };
      dispatch(registerProperty(property));
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
          Informacion de Propiedad
        </Heading>
        <FormLabel>Nombre</FormLabel>
        <Input
          type="text"
          variant={'outline'}
          name="projectname"
          bg={'blackAlpha.50'}
          color={'black'}
          focusBorderColor={'blue.200'}
          size={'md'}
          w={'100%'}
          mb={'2vh'}
          onReset={formik.handleReset}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.projectname}
        />
        <FormLabel>Precio</FormLabel>
        <Input
          type="text"
          variant={'outline'}
          name="price"
          bg={'blackAlpha.50'}
          color={'black'}
          focusBorderColor={'blue.200'}
          size={'md'}
          w={'100%'}
          mb={'2vh'}
          onReset={formik.handleReset}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.price}
        />
        <FormLabel>Región</FormLabel>
        <Input
          type="text"
          variant={'outline'}
          name="region"
          bg={'blackAlpha.50'}
          color={'black'}
          focusBorderColor={'blue.200'}
          size={'md'}
          w={'100%'}
          mb={'2vh'}
          onReset={formik.handleReset}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.region}
        />
        <FormLabel>Comuna</FormLabel>
        <Input
          type="text"
          variant={'outline'}
          name="commune"
          bg={'blackAlpha.50'}
          color={'black'}
          focusBorderColor={'blue.200'}
          size={'md'}
          w={'100%'}
          mb={'2vh'}
          onReset={formik.handleReset}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.commune}
        />
        <FormLabel>Dormitorios</FormLabel>
        <Input
          type="text"
          variant={'outline'}
          name="bedr"
          bg={'blackAlpha.50'}
          color={'black'}
          focusBorderColor={'blue.200'}
          size={'md'}
          w={'100%'}
          mb={'2vh'}
          onReset={formik.handleReset}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.bedr}
        />
        <FormLabel>Cantidad de Baños</FormLabel>
        <Input
          type="text"
          variant={'outline'}
          name="bath"
          bg={'blackAlpha.50'}
          color={'black'}
          focusBorderColor={'blue.200'}
          size={'md'}
          w={'100%'}
          mb={'2vh'}
          onReset={formik.handleReset}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.bath}
        />
        <FormLabel>Bodega</FormLabel>
        <Input
          type="text"
          variant={'outline'}
          name="storage"
          bg={'blackAlpha.50'}
          color={'black'}
          focusBorderColor={'blue.200'}
          size={'md'}
          w={'100%'}
          mb={'2vh'}
          onReset={formik.handleReset}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.storage}
        />
        <FormLabel>Estacionamiento</FormLabel>
        <Input
          type="text"
          variant={'outline'}
          name="parking"
          bg={'blackAlpha.50'}
          color={'black'}
          focusBorderColor={'blue.200'}
          size={'md'}
          w={'100%'}
          mb={'2vh'}
          onReset={formik.handleReset}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.parking}
        />
        <FormLabel>Cap Rate</FormLabel>
        <Input
          type="text"
          variant={'outline'}
          name="caprate"
          bg={'blackAlpha.50'}
          color={'black'}
          focusBorderColor={'blue.200'}
          size={'md'}
          w={'100%'}
          mb={'2vh'}
          onReset={formik.handleReset}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.caprate}
        />
        <FormLabel>Area Total</FormLabel>
        <Input
          type="text"
          variant={'outline'}
          name="totalarea"
          bg={'blackAlpha.50'}
          color={'black'}
          focusBorderColor={'blue.200'}
          size={'md'}
          w={'100%'}
          mb={'2vh'}
          onReset={formik.handleReset}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.totalarea}
        />
        <FormLabel>Tipo de Entrega</FormLabel>
        <Input
          type="text"
          variant={'outline'}
          name="deliverytype"
          bg={'blackAlpha.50'}
          color={'black'}
          focusBorderColor={'blue.200'}
          size={'md'}
          w={'100%'}
          mb={'2vh'}
          onReset={formik.handleReset}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.deliverytype}
        />
        <FormLabel>Inmobiliaria</FormLabel>
        <Input
          type="text"
          variant={'outline'}
          name="inmob"
          bg={'blackAlpha.50'}
          color={'black'}
          focusBorderColor={'blue.200'}
          size={'md'}
          w={'100%'}
          mb={'2vh'}
          onReset={formik.handleReset}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.inmob}
        />
        <FormLabel>Disponible</FormLabel>
        <Input
          type="text"
          variant={'outline'}
          name="stock"
          bg={'blackAlpha.50'}
          color={'black'}
          focusBorderColor={'blue.200'}
          size={'md'}
          w={'100%'}
          mb={'2vh'}
          onReset={formik.handleReset}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.stock}
        />
        <Button
          mt={'1.2em'}
          bg={'red.600'}
          color={'white'}
          h={'6vh'}
          w={'16%'}
          size="md"
          pos={'absolute'}
          bottom={'10vh'}
          right={'29vw'}
          _hover={{ bg: 'blue.400', color: 'white' }}
          onClick={() => {
            setSelectedUser('');
            setContinue(false);
          }}
        >
          Regresar
        </Button>
        <Button
          mt={'1.2em'}
          bg={'blue.600'}
          color={'white'}
          w={'16%'}
          h={'6vh'}
          size="md"
          pos={'absolute'}
          bottom={'10vh'}
          right={'16vw'}
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
          //disabled={formik.isSubmitting}
          bg={'blue.600'}
          color={'white'}
          h={'6vh'}
          w={'16%'}
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
