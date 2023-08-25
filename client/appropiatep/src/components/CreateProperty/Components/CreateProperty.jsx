import {
  Box,
  Button,
  FormLabel,
  Heading,
  HStack,
  Input,
  Select,
  useColorModeValue,
} from '@chakra-ui/react';
import { Formik, useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { regiones } from '../../../data/comunas.json';
import { registerPropierty } from '../../../redux/properties/propertiesAction';

export const CreateProperty = () => {
  const [Comunas, setComunas] = useState([]);
  const dispatch = useDispatch();
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
      dispatch(registerPropierty(property));
    },
  });
  useEffect(() => {
    let comunas = regiones?.find((com) => com.region === formik.values.region);
    setComunas(comunas?.comunas);
  }, [formik]);
  const color = useColorModeValue('black', 'white');
  const bgBox = useColorModeValue('gray.200', 'gray.800');
  return (
    <Box pl={4} pr={4} w={'100%'} bg={bgBox} p={4} h={'80vh'}>
      <form onSubmit={formik.handleSubmit}>
        <Heading
          fontSize={26}
          color={'blue.400'}
          mb={'0.7vh'}
          textAlign={'center'}
        >
          Informacion de Propiedad
        </Heading>
        <HStack p={0}>
          <FormLabel w={'100%'} mt={2} color={color}>
            Nombre
          </FormLabel>
          <FormLabel w={'100%'} color={color}>
            Precio
          </FormLabel>
        </HStack>
        <HStack>
          <Input
            type="text"
            variant={'outline'}
            name="projectname"
            bg={'blackAlpha.50'}
            color={color}
            focusBorderColor={'blue.200'}
            size={'md'}
            w={'100%'}
            mb={'1vh'}
            mt={2}
            onReset={formik.handleReset}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.projectname}
          />
          <Input
            type="text"
            variant={'outline'}
            name="price"
            bg={'blackAlpha.50'}
            color={color}
            focusBorderColor={'blue.200'}
            size={'md'}
            w={'100%'}
            mb={'1vh'}
            onReset={formik.handleReset}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
          />
        </HStack>
        <HStack p={0}>
          <FormLabel w={'100%'} mt={2} color={color}>
            Región
          </FormLabel>
          <FormLabel w={'100%'} color={color}>
            Comuna
          </FormLabel>
        </HStack>
        <HStack>
          <Select
            type="text"
            variant={'outline'}
            name="region"
            bg={'blackAlpha.50'}
            color={color}
            focusBorderColor={'blue.200'}
            size={'md'}
            w={'100%'}
            mb={'1vh'}
            mt={2}
            onReset={formik.handleReset}
            onChange={
              formik.handleChange
              // const comunas = regiones.find(
              //   (com) => com.region === formik.values.region
              // );
              // setComunas(comunas);
            }
            onBlur={formik.handleBlur}
            value={formik.values.region}
          >
            <option>Elige una opcion...</option>
            {regiones.map((com) => {
              return <option value={com.region}>{com.region}</option>;
            })}
          </Select>

          <Select
            type="text"
            variant={'outline'}
            name="commune"
            bg={'blackAlpha.50'}
            color={color}
            focusBorderColor={'blue.200'}
            size={'md'}
            w={'100%'}
            mb={'1vh'}
            onReset={formik.handleReset}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.commune}
          >
            <option>Elige una opcion...</option>
            {Comunas?.length &&
              Comunas?.map((com) => {
                return <option value={com}>{com}</option>;
              })}
          </Select>
        </HStack>
        <HStack>
          <FormLabel w={'24.5%'} mt={2} color={color}>
            Dormitorios
          </FormLabel>
          <FormLabel w={'24.5%'} color={color}>
            Baños
          </FormLabel>
          <FormLabel w={'24.5%'} color={color}>
            Bodega
          </FormLabel>
          <FormLabel w={'24.5%'} color={color}>
            Estacionamiento
          </FormLabel>
        </HStack>
        <HStack>
          <Input
            type="text"
            variant={'outline'}
            name="bedr"
            bg={'blackAlpha.50'}
            color={color}
            focusBorderColor={'blue.200'}
            size={'md'}
            w={'24.5%'}
            mb={'1vh'}
            mt={2}
            onReset={formik.handleReset}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.bedr}
          />
          <Input
            type="text"
            variant={'outline'}
            name="bath"
            bg={'blackAlpha.50'}
            color={color}
            focusBorderColor={'blue.200'}
            size={'md'}
            w={'24.5%'}
            mb={'1vh'}
            onReset={formik.handleReset}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.bath}
          />
          <Input
            type="text"
            variant={'outline'}
            name="storage"
            bg={'blackAlpha.50'}
            color={color}
            focusBorderColor={'blue.200'}
            size={'md'}
            w={'24.5%'}
            mb={'1vh'}
            onReset={formik.handleReset}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.storage}
          />
          <Input
            type="text"
            variant={'outline'}
            name="parking"
            bg={'blackAlpha.50'}
            color={color}
            focusBorderColor={'blue.200'}
            size={'md'}
            w={'24.5%'}
            mb={'1vh'}
            onReset={formik.handleReset}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.parking}
          />
        </HStack>
        <HStack>
          <FormLabel w={'32.5%'} mt={2} color={color}>
            Cap Rate
          </FormLabel>
          <FormLabel w={'32.5%'} color={color}>
            Area Total
          </FormLabel>
          <FormLabel w={'32.5%'} color={color}>
            Disponible
          </FormLabel>
        </HStack>
        <HStack>
          <Input
            type="text"
            variant={'outline'}
            name="caprate"
            bg={'blackAlpha.50'}
            color={color}
            focusBorderColor={'blue.200'}
            size={'md'}
            w={'100%'}
            mb={'1vh'}
            mt={2}
            onReset={formik.handleReset}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.caprate}
          />
          <Input
            type="text"
            variant={'outline'}
            name="totalarea"
            bg={'blackAlpha.50'}
            color={color}
            focusBorderColor={'blue.200'}
            size={'md'}
            w={'100%'}
            mb={'1vh'}
            onReset={formik.handleReset}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.totalarea}
          />

          <Select
            type="text"
            variant={'outline'}
            name="stock"
            bg={'blackAlpha.50'}
            color={color}
            focusBorderColor={'blue.200'}
            size={'md'}
            w={'100%'}
            mb={'1vh'}
            onReset={formik.handleReset}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.stock}
          >
            <option>Elige una opcion...</option>
            <option>true</option>
            <option>false</option>
          </Select>
        </HStack>
        <HStack>
          <FormLabel w={'100%'} mt={2} color={color}>
            Tipo de Entrega
          </FormLabel>
          <FormLabel w={'100%'} color={color}>
            Inmobiliaria
          </FormLabel>
        </HStack>

        <HStack>
          <Select
            type="text"
            variant={'outline'}
            name="deliverytype"
            bg={'blackAlpha.50'}
            color={color}
            focusBorderColor={'blue.200'}
            size={'md'}
            w={'100%'}
            mb={'1vh'}
            mt={2}
            onReset={formik.handleReset}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.deliverytype}
          >
            <option>Elige una opcion...</option>
            <option>Inmediata</option>
            <option>Primer Semestre 2023</option>
            <option>Segundo Semestre 2023</option>
            <option>Primer Semestre 2024</option>
            <option>Segundo Semestre 2024</option>
            <option>Primer Semestre 2025</option>
            <option>Segundo Semestre 2025</option>
            <option>Primer Semestre 2026</option>
            <option>Segundo Semestre 2026</option>
          </Select>
          <Input
            type="text"
            variant={'outline'}
            name="inmob"
            bg={'blackAlpha.50'}
            color={color}
            focusBorderColor={'blue.200'}
            size={'md'}
            w={'100%'}
            mb={'1vh'}
            onReset={formik.handleReset}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.inmob}
          />
        </HStack>
        <Button
          mt={'1.2em'}
          bg={'red.600'}
          color={'white'}
          h={'6vh'}
          w={'16%'}
          size="md"
          pos={'absolute'}
          bottom={'7vh'}
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
          bottom={'7vh'}
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
          bottom={'7vh'}
          right={'3vw'}
          _hover={{ bg: 'blue.400', color: 'white' }}
        >
          Enviar
        </Button>
      </form>
    </Box>
  );
};
