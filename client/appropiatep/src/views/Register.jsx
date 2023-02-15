import {
  Box,
  Button,
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
  useDisclosure
} from '@chakra-ui/react';
import React from 'react';
import { NavBar } from '../components/NavBar';

export const Register = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  /*const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  );
  const [Option, setOption] = React.useState('fullinformation');
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
      <Heading 
        alignItems={'center'}
        p={'10'}>Completa tu registro
      </Heading>
      <Divider/>
      <List 
        spacing={3}
        w={'30%'}
        p={'20'}>
        <FormControl isRequired>
          <FormLabel> Renta líquida</FormLabel>
          <Input 
            placeholder='$'
            type="number"
           />
        </FormControl>
        <FormControl isRequired>
          <FormLabel >Edad</FormLabel>
            <NumberInput w={'30%'} max={99} min={18}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
        </FormControl>        
        <FormControl isRequired>
          <FormLabel> Ahorro actual</FormLabel>
          <Input 
            placeholder='$'
            type="number" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel> Crédito Hipotecario PRE-aprobado</FormLabel>
          <Input 
            placeholder='$'
            type="number" />
          <FormHelperText>Escribe el monto</FormHelperText>
        </FormControl>
        <Button
          mt={'1.2em'}
          type="submit"
          colorScheme={'teal'}
          w={'100%'}
          size="md"> Enviar</Button>
      </List>
    </Box>
  );
}; 
