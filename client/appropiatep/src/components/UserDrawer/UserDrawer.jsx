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
  return (
    <Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={'gray.800'}>
          <DrawerCloseButton
            bg={'red.700'}
            color={'whiteAlpha.800'}
            focusBorderColor={'whiteAlpha.900'}
          />
          <DrawerHeader color={'blue.500'}>Informacion de Usuario</DrawerHeader>

          <DrawerBody>
            <FormLabel mt={'1rem'} color={'white'}>
              Nombre de Usuario
            </FormLabel>
            <Text color={'whiteAlpha.700'}>{username}</Text>
            <FormLabel mt={'1rem'} color={'white'}>
              Correo electronico
            </FormLabel>
            <Text color={'whiteAlpha.700'}>{email}</Text>
            <FormLabel mt={'1rem'} color={'white'}>
              Usuario desde:
            </FormLabel>
            <Text color={'whiteAlpha.700'}>
              {capitalizeFirstLetter(formatDate)}
            </Text>
          </DrawerBody>

          <DrawerFooter>
            <Button colorScheme={'red'} mr={3} onClick={onClose}>
              Log Out
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
