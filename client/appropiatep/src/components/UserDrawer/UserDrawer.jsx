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

export const UserDrawer = ({
  btnRef,
  isOpen,
  onClose,
  username,
  email,
  createdAt,
}) => {
  const opciones = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
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
            <Editable color={'primary'}  defaultValue={username}>
              <EditablePreview /> 
              <Input as={EditableInput} />
              <EditableControls />
            </Editable>
            <FormLabel mt={'1rem'} color={color}>
              Correo electronico
            </FormLabel>
            <Editable color={'primary'}  defaultValue={email}>
              <EditablePreview /> 
              <Input as={EditableInput} />
              <EditableControls />
            </Editable>
            <FormLabel mt={'1rem'} color={color}>
              Usuario desde:
            </FormLabel>
            <Text color={'primary'}>{capitalizeFirstLetter(formatDate)}</Text>
            <Button bg={'color'}
            left={'220px'}> {<UilBell/>} </Button>
          </DrawerBody>

          <DrawerFooter >
            <FormLabel margin={'5px'} spacing={4}>
              <Button bg={'primary'} color={color} h={'20px'}>
                Save
              </Button>
              <Button bg={'primary'} color={color} h={'20px'} >
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
