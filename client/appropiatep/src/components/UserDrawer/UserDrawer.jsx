import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay, Editable,
  EditableInput, EditablePreview, EditableTextarea,
  Flex,
  FormLabel,
  IconButton,
  Input,
  Text,
  useColorModeValue, useDisclosure,
  useEditableControls
} from '@chakra-ui/react';
import { UilBell, UilCheckCircle, UilEdit, UilTimesCircle } from '@iconscout/react-unicons';
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateUsers } from '../../redux/users/usersAction';

export const UserDrawer = ({
  btnRef,
  isOpen,
  onClose,
  username,
  email,
  createdAt,
  userId,
  password,
}) => {
  const opciones = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const dispatch = useDispatch()
  const [EditAction, setEditAction] = React.useState(false);
  const [Info, setInfo] = React.useState({
    username: '', email: '',
  });
  let formatDate = new Date(createdAt);
  formatDate = formatDate.toLocaleDateString('es-CL', opciones);
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls()

    return isEditing ? (
      <ButtonGroup >
        <IconButton icon={<UilCheckCircle />} {...getSubmitButtonProps()} />
        <IconButton icon={<UilTimesCircle />} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      <Flex>
        <IconButton icon={<UilEdit />} {...getEditButtonProps()} />
      </Flex>
    )
  }
  const bg = useColorModeValue('white', 'black');
  const color = useColorModeValue('black', 'white');
  let handleChange = (e) => {setInfo({...Info, [e.target.name]: e.target.value})};
  return (
    <Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={bg} w={'full'}>
          <DrawerCloseButton
            bg={'red.600'}
            color={'white'}
            focusBorderColor={'whiteAlpha.900'}
          />
          <DrawerHeader color={'primary'}>Informacion de Usuario </DrawerHeader>

          
          <Avatar size='xl' bg='primary' left={'100px'}/>
          
          <DrawerBody>
            
            <FormLabel mt={'1rem'} color={color}>
              Nombre de Usuario
            </FormLabel>
            {EditAction === true?( <Editable color={'primary'}  defaultValue={username}  >
              <EditablePreview /> 
              <Input as={EditableInput} name='username' onChange={(e)=>{handleChange(e);
              console.log(Info)
            }} />
              <EditableControls />
            </Editable>): (<Text>{username}</Text>)}
            <FormLabel mt={'1rem'} color={color}>
              Correo electronico
            </FormLabel>
            {EditAction === true?( <Editable color={'primary'}  defaultValue={email} >
              <EditablePreview /> 
              <Input as={EditableInput} name='email' onChange={(e)=>{handleChange(e);
              console.log(Info)
            }} />
              <EditableControls />
            </Editable>): (<Text>{email}</Text>)}
            <FormLabel mt={'1rem'} color={color}>
              Usuario desde:
            </FormLabel>
            <Text color={'primary'}>{capitalizeFirstLetter(formatDate)}</Text>
            <Button bg={'color'}
            left={'220px'}> {<UilBell/>} </Button>
          </DrawerBody>

          <DrawerFooter >
            <FormLabel margin={'5px'} spacing={4}>
              <Button bg={'primary'} color={color} h={'20px'} onClick={()=>{dispatch(updateUsers({user:{id:userId}, info:Info}))
                setEditAction(false)}}>
                Save
              </Button>
              <Button bg={'primary'} color={color} h={'20px'} onClick={()=>{setEditAction(true)}} >
                Editar Info
              </Button>
            </FormLabel>
            <FormLabel margin={'5px'} spacing={4}>
              <Button bg={'primary'} color={color} h={'20px'}>
                Completar Info
              </Button>
              <Button bg={'red.500'} mr={3} onClick={onClose} h={'20px'}>
                Log Out
              </Button>
            </FormLabel>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
