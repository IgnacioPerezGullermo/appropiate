import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
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
        <DrawerContent bg={bg}>
          <DrawerCloseButton
            bg={'red.600'}
            color={'white'}
            focusBorderColor={'whiteAlpha.900'}
          />
          <DrawerHeader color={'primary'}>Informacion de Usuario</DrawerHeader>

          <DrawerBody>
            <FormLabel mt={'1rem'} color={color}>
              Nombre de Usuario
            </FormLabel>
            <Text color={'primary'}>{username}</Text>
            <FormLabel mt={'1rem'} color={color}>
              Correo electronico
            </FormLabel>
            <Text color={'primary'}>{email}</Text>
            <FormLabel mt={'1rem'} color={color}>
              Usuario desde:
            </FormLabel>
            <Text color={'primary'}>{capitalizeFirstLetter(formatDate)}</Text>
          </DrawerBody>

          <DrawerFooter>
            <Button bg={'red.500'} mr={3} onClick={onClose}>
              Log Out
            </Button>
            <Button bg={'primary'} color={color}>
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
