import {
  Box,
  Button,
  FormLabel,
  Heading,
  HStack,
  Input,
  Select,
  Tab,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createAppointment,
  getBrokers,
  getClients,
} from '../../../redux/appointments/appointmentsAction';

export const AppointmentForm = ({ TabIndex }) => {
  const dispatch = useDispatch();
  const { brokers, clients, error, loading, success } = useSelector(
    (state) => state.appointments
  );
  React.useEffect(() => {
    dispatch(getBrokers());
    dispatch(getClients());
  }, [TabIndex]);
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      date: '',
      starstAt: '',
      brokerId: '',
      clientId: '',
      type: '',
    },
    validate: (values) => {
      const errors = {};
      return errors;
    },
    onSubmit: (values, actions) => {
      let year = values.date.slice(0, 4);
      let month = Number(values.date.slice(5, 7)) - 1;
      let day = values.date.slice(8, 10);
      let hours = values.starstAt.slice(0, 2);
      let minutes = values.starstAt.slice(3, 6);
      let date = new Date();
      date.setFullYear(year);
      date.setMonth(month);
      date.setDate(day);
      date.setHours(hours);
      date.setMinutes(minutes);
      date = date.toString();
      console.log(month);
      const finalDate = date.slice(0, 15);
      const finalHour = date.slice(16, 33);
      const appointment = {
        title: values.title,
        description: values.description,
        date: finalDate,
        starstAt: finalHour,
        brokerId: values.brokerId,
        clientId: values.clientId,
        type: 'free',
      };
      dispatch(createAppointment(appointment), []);
    },
  });
  return (
    <Box pl={{ base: 4, md: 6 }} pr={4} w={'100%'} h={'100%'}>
      <form onSubmit={formik.handleSubmit}>
        <Heading
          fontSize={26}
          color={'primary'}
          mb={'5vh'}
          textAlign={'center'}
        >
          Completa aqui la info
        </Heading>
        <FormLabel fontSize={18} color={'primary'} mt={'2vh'} mb={'1vh'}>
          Titulo
        </FormLabel>
        <Input
          type={'text'}
          name="title"
          bg={'white'}
          color={'black'}
          onReset={formik.handleReset}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        ></Input>
        <FormLabel fontSize={18} color={'primary'} mt={'2vh'} mb={'1vh'}>
          Descripción
        </FormLabel>
        <Input
          type={'text'}
          name="description"
          bg={'white'}
          color={'black'}
          onReset={formik.handleReset}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
        ></Input>
        <HStack mt={'2vh'}>
          <FormLabel fontSize={18} color={'primary'} w={'49%'}>
            Fecha
          </FormLabel>
          <FormLabel fontSize={18} color={'primary'} mb={'2vh'}>
            Hora
          </FormLabel>
        </HStack>
        <HStack>
          <Input
            type={'date'}
            name="date"
            bg={'white'}
            color={'black'}
            width={'50%'}
            onReset={formik.handleReset}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.date}
          ></Input>
          <Input
            name="starstAt"
            type={'time'}
            bg={'white'}
            width={'50%'}
            color={'black'}
            onReset={formik.handleReset}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.starstAt}
          ></Input>
        </HStack>
        <FormLabel fontSize={18} color={'primary'} mt={'2vh'} mb={'1vh'}>
          Broker
        </FormLabel>
        <Select
          placeholder="Selecciona tu broker"
          name="brokerId"
          bg={'white'}
          onReset={formik.handleReset}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.brokerId}
        >
          {brokers?.map((broker) => {
            return <option value={broker.id}>{broker.username}</option>;
          })}
        </Select>
        <FormLabel fontSize={18} color={'primary'} mt={'2vh'} mb={'1vh'}>
          Cliente
        </FormLabel>
        <Select
          placeholder="Selecciona al cliente"
          bg={'white'}
          name="clientId"
          onReset={formik.handleReset}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.clientId}
        >
          {clients?.map((client) => {
            return <option value={client.id}>{client.username}</option>;
          })}
        </Select>
        <Button
          type="submit"
          width={'100%'}
          bg="primary"
          color={'white'}
          mt={'4vh'}
          borderRadius={'lg'}
          fontWeight={'medium'}
        >
          Enviar
        </Button>
      </form>
    </Box>
  );
};
