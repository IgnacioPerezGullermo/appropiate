import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, refreshInfo } from '../../redux/auth/authAction';
import { updateUsers } from '../../redux/users/usersAction';
import { AvatarBox } from './components/AvatarBox';
import { AvatarModal } from './components/AvatarModal';
import { EditableDetalles } from './components/EditableDetalles';
import { EditableFinanciero } from './components/EditableFinanciero';
import { EditableInformacion } from './EditableInformacion';

export const UserDrawer = ({ btnRef, isOpen, onClose, setLogged }) => {
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
  const [indexAccordion, indexAccordionSet] = React.useState(-1);
  const [infoComplete, infoCompleteSet] = React.useState(false);
  const bg = useColorModeValue('white', 'black');
  const color = useColorModeValue('black', 'white');
  const handleLogOut = () => {
    setLogged(false);
    dispatch(logOut());
    localStorage.removeItem('userToken');
    onClose();
  };

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
          {/* <DrawerHeader color={'primary'}>Informacion de Usuario </DrawerHeader> */}
          <AvatarBox
            profilePicture={userInfo?.client?.profilePicture}
            clientId={userInfo?.clientId}
            userId={userInfo?.id}
          />
          <DrawerBody>
            <Accordion allowToggle index={indexAccordion}>
              <AccordionItem>
                <h2>
                  <AccordionButton
                    color={'primary'}
                    onClick={() => {
                      indexAccordion === 0
                        ? indexAccordionSet(-1)
                        : indexAccordionSet(0);
                    }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      Información del Usuario
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {' '}
                  <EditableInformacion />{' '}
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton
                    color={'primary'}
                    onClick={() => {
                      indexAccordion === 1
                        ? indexAccordionSet(-1)
                        : indexAccordionSet(1);
                    }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      Datos de Usuario
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <EditableDetalles
                    indexAccordionSet={indexAccordionSet}
                    infoCompleteSet={infoCompleteSet}
                  />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton
                    color={'primary'}
                    onClick={() => {
                      indexAccordion === 2
                        ? indexAccordionSet(-1)
                        : indexAccordionSet(2);
                    }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      Información Financiera
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <EditableFinanciero
                    infoComplete={infoComplete}
                    infoCompleteSet={infoCompleteSet}
                    onClose={onClose}
                  />
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </DrawerBody>
          <DrawerFooter>
            <Button
              bg={'red.500'}
              color={'white'}
              mr={'25%'}
              w={'50%'}
              textAlign={'center'}
              onClick={handleLogOut}
            >
              Log Out
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
