import {
  Avatar,
  Button,
  Center,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { refreshInfo } from '../../../redux/auth/authAction';
import { updateProfilePicture } from '../../../redux/clients/clientsAction';

export const AvatarModal = ({
  isOpen,
  onClose,
  modalRef,
  profilePicture,
  clientId,
  userId,
}) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const [info, infoSet] = useState();
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} modalRef={modalRef}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <Avatar
                size="2xl"
                bg="primary"
                mt={'5vh'}
                mb={'2vh'}
                src={profilePicture}
              />
              <form
                encType="multipart/form-data"
                onSubmit={(e) => {
                  e.preventDefault();
                  const data = new FormData();
                  data.append('file', info);
                  const client = {
                    id: clientId,
                    info: data,
                  };
                  console.log(client);
                  dispatch(updateProfilePicture(client));
                  setTimeout(() => {
                    dispatch(refreshInfo(userId));
                  }, 500);
                  toast({
                    title: 'Carga Exitosa',
                    description: 'Tu foto de perfil fue actualizada con exito',
                    status: 'success',
                    variant: 'left-accent',
                    duration: 4000,
                    onCloseComplete: onClose(),
                  });
                  //onClose();
                }}
              >
                <Input
                  type={'file'}
                  p={1}
                  onChange={(e) => {
                    infoSet(e.target.files[0]);
                  }}
                />
                <Button colorScheme="blue" type="submit">
                  Enviar
                </Button>
              </form>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Center>
              <Button colorScheme="blue" onClick={onClose}>
                Close
              </Button>
            </Center>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
