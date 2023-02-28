import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useColorModeValue
} from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, refreshInfo } from '../../redux/auth/authAction';
import { updateUsers } from '../../redux/users/usersAction';
import { EditableInformacion } from './EditableInformacion';

export const UserDrawer = ({
  btnRef,
  isOpen,
  onClose,
}) => {
  const opciones = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const [EditAction, setEditAction] = React.useState(false);
  const [Info, setInfo] = React.useState({
    username: '',
    email: '',
  });
  /*let formatDate = new Date(userInfo?.createdAt);
  formatDate = formatDate.toLocaleDateString('es-CL', opciones);
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }*/
  /*function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup>
        <IconButton size={'sm'} icon={<UilCheckCircle />} {...getSubmitButtonProps()} />
      </ButtonGroup>
    ) : (
      <IconButton size={'sm'} icon={<UilEdit />} mt={'-6.5vh'} {...getEditButtonProps()}></IconButton>
    );
  }*/
  const bg = useColorModeValue('white', 'black');
  const color = useColorModeValue('black', 'white');
  /*let handleChange = (e) => {
    setInfo({
      ...Info,
      [e.target.name]: e.target.value,
    });
  };
  let handleSubmit = () => {
    dispatch(updateUsers({ id: userInfo?.id, info: Info }));
    setTimeout(() => {
      dispatch(refreshInfo(userInfo?.id));
    }, 500);
    setEditAction(false);
  };*/
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

          <Avatar
            size="xl"
            bg="primary"
            left={'100px'}
            src={userInfo?.client?.profilePicture}
          />

          <DrawerBody>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton color={"primary"}>
                    <Box as="span" flex='1' textAlign='left'>
                      Información del Usuario
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor 
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton color={"primary"}>
                    <Box as="span" flex='1' textAlign='left'>
                      Datos de Usuario
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor 
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton color={"primary"}>
                    <Box as="span" flex='1' textAlign='left'>
                      Información Financiera
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor 
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </DrawerBody>
          <DrawerFooter>
            <FormLabel margin={'5px'} spacing={4}>
              <Button
                bg={'primary'}
                color={color}
                h={'20px'}
                onClick={() => {
                  handleSubmit();
                }}
              >
                Save
              </Button>

              <Button
                bg={'primary'}
                color={color}
                h={'20px'}
              >
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
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
