import {
  Box,
  Button,
  Center,
  Circle,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  List,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { UilMoon, UilSun } from '@iconscout/react-unicons';
import { Field, Formik, useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { refreshInfo } from '../../redux/auth/authAction';
import { createClient, updateClient } from '../../redux/clients/clientsAction';
import { NavBar } from '../NavBar';
import { EditUpgradeForm } from './EditUpgradeForm';

export const UpgradeForm = ({ Option, setOption, infoCompleteSet }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const { loading, success, error } = useSelector((state) => state.clients);
  const toast = useToast();
  React.useEffect(() => {
    if (success === true && Option === 'fullinformation') {
      toast({
        title: `Datos completados con éxito ${userInfo?.username}`,
        description: 'En instantes te redirigiremos',
        status: 'success',
        duration: 5000,
        isClosable: false,
        onCloseComplete: navigate('/DisplayPropierty'),
      });
    }
    if (success === true) {
      toast({
        title: `Felicidades ${userInfo?.username}`,
        description: 'En momentos te redirigiremos a las propiedades',
        status: 'success',
        duration: 5000,
        isClosable: false,
        onCloseComplete: navigate('/DisplayPropierty'),
      });
    }
    if (success === false && error) {
      toast({
        title: 'Algo ha salido mal',
        description: error,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  }, [navigate, userInfo, success, Option]);

  const { colorMode, toggleColorMode } = useColorMode();
  const generalColor = useColorModeValue('black', 'white');
  const bgColor = useColorModeValue('gray.100', '#272727');
  const bgBoxColor = useColorModeValue('white', 'black');
  const color = useColorModeValue('black', 'white');
  const bg = useColorModeValue('gray.200', 'gray.800');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Box>
      <Box bg={bgColor} top={'12vh'}>
        <Center w={'100%'} bg={bgBoxColor}>
          <List color={generalColor} w={'100%'}>
            <Formik
              initialValues={{
                basicIncome: '',
                age: '',
                currentSavings: '',
                bankCredit: '',
              }}
              onSubmit={(values, actions) => {
                let client = {
                  basicIncome: values.basicIncome,
                  age: values.age,
                  currentSavings: values.currentSavings,
                  bankCredit: values.bankCredit,
                  userId: userInfo?.id,
                };
                console.log(client);
                dispatch(createClient(client));
                infoCompleteSet(false);
                setTimeout(() => {
                  dispatch(refreshInfo(userInfo?.id));
                }, 500);
              }}
            >
              {(props) => (
                <form onSubmit={props.handleSubmit}>
                  <Field name="basicIncome">
                    {({ field, form }) => (
                      <FormControl>
                        <FormLabel fontSize={'sm'}> Renta líquida</FormLabel>
                        <Input
                          placeholder="$"
                          type="number"
                          marginBottom={'2'}
                          w={'100%'}
                          borderColor={'primary'}
                          {...field}
                        />
                      </FormControl>
                    )}
                  </Field>
                  <Field name="age">
                    {({ field, form }) => (
                      <FormControl>
                        <FormLabel fontSize={'sm'}>Edad</FormLabel>
                        <NumberInput
                          borderColor={'primary'}
                          w={'100%'}
                          max={99}
                          min={18}
                          marginBottom={'2'}
                          onChange={(val) =>
                            form.setFieldValue(field.name, val)
                          }
                          //onBlur={formik.handleBlur}
                          //</FormControl>value={formik.values.age}
                        >
                          <NumberInputField />
                          <NumberInputStepper>
                            <NumberIncrementStepper color={'primary'} />
                            <NumberDecrementStepper color={'primary'} />
                          </NumberInputStepper>
                        </NumberInput>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="currentSavings">
                    {({ field, form }) => (
                      <FormControl>
                        <FormLabel fontSize={'sm'}> Ahorro actual</FormLabel>
                        <Input
                          placeholder="$"
                          type="number"
                          marginBottom={'2'}
                          w={'100%'}
                          borderColor={'primary'}
                          {...field}
                        />
                      </FormControl>
                    )}
                  </Field>
                  <Field name="bankCredit">
                    {({ field, form }) => (
                      <FormControl>
                        <FormLabel fontSize={'sm'}>
                          {' '}
                          Crédito Hipotecario PRE-aprobado
                        </FormLabel>
                        <Input
                          placeholder="$"
                          type="number"
                          w={'100%'}
                          borderColor={'primary'}
                          {...field}
                        />
                        <FormHelperText marginBottom={'2'}>
                          Escribe el monto
                        </FormHelperText>
                      </FormControl>
                    )}
                  </Field>
                  <Button
                    bg={'primary'}
                    color={color}
                    width={'48%'}
                    type="submit"
                  >
                    Guardar
                  </Button>

                  <Button
                    bg={'primary'}
                    color={color}
                    width={'48%'}
                    ml={'2%'}
                    onClick={() => {
                      infoCompleteSet(false);
                    }}
                  >
                    Cancelar
                  </Button>
                </form>
              )}
            </Formik>
          </List>
        </Center>
      </Box>
    </Box>
  );
};
