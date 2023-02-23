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
import { createClient } from '../../redux/clients/clientsAction';
import { NavBar } from '../NavBar';

export const UpgradeForm = ({ Option, setOption }) => {
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
  const bg = useColorModeValue('gray.200', 'gray.800');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  /*const formik = useFormik({
        initialValues: { basicIncome: '', age: '', currentSavings: '', bankCredit: '' },
        validate: (values) => {
          const errors = {};
          return errors;
        },
        onSubmit: (values, actions) => {
          const upgradeClient = {
            basicIncome: values.basicIncome,
            age: values.age,
            currentSavings: values.currentSavings,
            bankCredit: values.bankCredit,
            userId: userInfo?.id,
          };
          console.log(upgradeClient)
          //dispatch(registerUser(client));
        },
    }); */
  return (
    <Box>
      <Box bg={bgColor} pos={'absolute'} w={'100%'} h={'86vh'} top={'12vh'}>
        <Center marginLeft={'25%'} w={'50%'} bg={bgBoxColor} marginTop={'2%'}>
          <List color={generalColor} w={'60%'} p={'10'}>
            <Heading
              color={'primary'}
              w={'100%'}
              padding={'2'}
              marginBottom={'10'}
            >
              Completa tu registro
            </Heading>
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
              }}
            >
              {(props) => (
                <form onSubmit={props.handleSubmit}>
                  <Field name="basicIncome">
                    {({ field, form }) => (
                      <FormControl>
                        <FormLabel> Renta líquida</FormLabel>
                        <Input
                          placeholder="$"
                          type="number"
                          marginBottom={'10'}
                          w={'50%'}
                          borderColor={'primary'}
                          {...field}
                        />
                      </FormControl>
                    )}
                  </Field>
                  <Field name="age">
                    {({ field, form }) => (
                      <FormControl>
                        <FormLabel>Edad</FormLabel>
                        <NumberInput
                          borderColor={'primary'}
                          w={'20%'}
                          max={99}
                          min={18}
                          marginBottom={'10'}
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
                        <FormLabel> Ahorro actual</FormLabel>
                        <Input
                          placeholder="$"
                          type="number"
                          marginBottom={'10'}
                          w={'50%'}
                          borderColor={'primary'}
                          {...field}
                        />
                      </FormControl>
                    )}
                  </Field>
                  <Field name="bankCredit">
                    {({ field, form }) => (
                      <FormControl>
                        <FormLabel> Crédito Hipotecario PRE-aprobado</FormLabel>
                        <Input
                          placeholder="$"
                          type="number"
                          w={'50%'}
                          borderColor={'primary'}
                          {...field}
                        />
                        <FormHelperText marginBottom={'10'}>
                          Escribe el monto
                        </FormHelperText>
                      </FormControl>
                    )}
                  </Field>
                  <Button
                    right={'-120px'}
                    bg={'primary'}
                    color={bgBoxColor}
                    borderColor={'#FFFFFF'}
                    alignItems={'center'}
                    borderRadius={'full'}
                    type={'submit'}
                    _hover={{ bg: '#272727', color: '#19C8C4' }}
                  >
                    {' '}
                    Guardar
                  </Button>
                  <Button
                    right={'-180px'}
                    bg={'#272727'}
                    color={bgBoxColor}
                    borderColor={'#FFFFFF'}
                    alignItems={'center'}
                    borderRadius={'full'}
                    _hover={{ bg: '#272727', color: '#19C8C4' }}
                    onClick={() => {
                      navigate('/');
                    }}
                  >
                    {' '}
                    Regresar
                  </Button>
                </form>
              )}
            </Formik>
          </List>
        </Center>
        <Circle
          pos={'absolute'}
          bottom={'4vh'}
          left={'4vh'}
          border={1}
          borderColor={'primary'}
          lineHeight={'base'}
          size={'6vh'}
          bg={bg}
          onClick={() => {
            toggleColorMode('dark');
          }}
          _hover={
            colorMode === 'light' ? { bg: 'gray.100' } : { bg: 'gray.900' }
          }
        >
          {colorMode === 'light' ? (
            <UilMoon size="30" color={'#19C8C4'} />
          ) : (
            <UilSun size="30" color={'#19C8C4'} />
          )}
        </Circle>
      </Box>
    </Box>
  );
};
