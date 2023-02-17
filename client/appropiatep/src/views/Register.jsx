import {
  Box
} from '@chakra-ui/react';
//import { UilArrowLeft, UilMoon, UilSun } from '@iconscout/react-unicons';
import React from 'react';
import { LoginForm } from '../components/LoginComponent/LoginForm/LoginForm';
import { UpgradeForm } from '../components/LoginComponent/UpgradeFrom';
/*import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { createClient } from '../redux/clients/clientsAction';*/

export const Register = () => {
  const [Option, setOption] = React.useState('upgrade');
  return (
    <Box>
      {Option === 'upgrade' ? (
        <UpgradeForm Option={Option} setOption={setOption} />
      ) : (
        <LoginForm Option={Option} setOption={setOption} />
      )}
    </Box>
  );
  /*const { colorMode, toggleColorMode } = useColorMode();
  const generalColor = useColorModeValue('black', 'white');
  const bgColor = useColorModeValue ('gray.100', '#272727');
  const bgBoxColor = useColorModeValue ('white', 'black');
  const bg = useColorModeValue('gray.200', 'gray.800');
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
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
            right={'-120px'}
            bg={'primary'}
            color={bgBoxColor}
            borderColor={'#FFFFFF'}
            alignItems={'center'}
            borderRadius={'full'}
            _hover={{ bg: '#272727', color: '#19C8C4' }}> Guardar
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
            }}> Regresar
          </Button>
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
  );*/
}; 