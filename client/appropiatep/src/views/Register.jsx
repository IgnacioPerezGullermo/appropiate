import {
  Box,
  Button,
  Center,
  Divider,
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
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavBar } from '../components/NavBar';
import { createClient } from '../redux/clients/clientsAction';

export const Register = () => {
  const generalColor = useColorModeValue('black', 'white');
  const bgColor = useColorModeValue ('gray.100', '#272727');
  const bgBoxColor = useColorModeValue ('white', 'black')
  /*const { userInfo, userToken } = useSelector((state)=> state.auth)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();*/
  /*const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  );*/
  /*const [Option, setOption] = React.useState('fullinformation');
  React.useEffect(() => {
    if (success === true && Option === 'fullinformation') {
      toast({
        title: `Datos completados con éxito ${userInfo?.username}`,
        description: 'En instantes te redirigiremos',
        status: 'success',
        duration: 5000,
        isClosable: false,
        onCloseComplete: navigate('/home'),
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
  }, [navigate, userInfo, success, Option]);*/
  return (
    
    <Box>
      <NavBar btnref={btnRef} onOpen={onOpen} location={'register'} />
      <Box
        bg={bgColor}
        pos={'absolute'}
        w={'100%'}
        h={'86vh'}
        top={'12vh'}>
        <Center
          marginLeft={'25%'}
          w={'50%'}
          bg={bgBoxColor}
          marginTop={'2%'}>
          
         <List 
          color={generalColor}
          w={'60%'}
          p={'10'}>
          <Heading
            color={'primary'}
            w={'100%'}
            padding={'2'}
            marginBottom={'10'}>Completa tu registro
          </Heading>
          <FormControl isRequired>
            <FormLabel> Renta líquida</FormLabel>
            <Input 
             placeholder='$'
             type="number"
             marginBottom={'10'}
             w={'50%'}
             borderColor={'primary'}
            />
           <FormLabel >Edad</FormLabel>
              <NumberInput 
                borderColor={'primary'}
                w={'20%'} 
                max={99} min={18} 
                marginBottom={'10'}> <NumberInputField  />
                <NumberInputStepper >
                  <NumberIncrementStepper color={'primary'} />  <NumberDecrementStepper color={'primary'}  />
                </NumberInputStepper>
              </NumberInput>
            <FormLabel> Ahorro actual</FormLabel>
            <Input 
              placeholder='$'
              type="number"
              marginBottom={'10'}
              w={'50%'}
              borderColor={'primary'} />
            <FormLabel> Crédito Hipotecario PRE-aprobado</FormLabel>
            <Input 
              placeholder='$'
              type="number"
              w={'50%'}
              borderColor={'primary'} />
            <FormHelperText  marginBottom={'10'} >Escribe el monto</FormHelperText>
          </FormControl>
          <Button
            right={'-150px'}
            bg={'primary'}
            color={bgBoxColor}
            borderColor={'#FFFFFF'}
            alignItems={'center'}
            borderRadius={'full'}
            _hover={{ bg: '#272727', color: '#19C8C4' }}> Guardar
          </Button>
        </List>
      </Center>
    </Box>
  </Box>
  );
}; 
