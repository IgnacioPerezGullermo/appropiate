import { Avatar, IconButton, useDisclosure } from '@chakra-ui/react';
import { UilEdit } from '@iconscout/react-unicons';
import React from 'react';
import { AvatarModal } from './AvatarModal';

export const AvatarBox = ({ profilePicture, clientId, userId }) => {
  const { onClose, onOpen, isOpen } = useDisclosure();
  const modalRef = React.useRef(null);
  return (
    <div>
      <Avatar
        size="xl"
        bg="primary"
        left={'100px'}
        mt={'5vh'}
        mb={'2vh'}
        src={profilePicture}
      />
      <IconButton
        icon={<UilEdit color={'#19C8C4'} />}
        pos={'absolute'}
        top={'13vh'}
        bg={'gray.800'}
        _hover={{ bg: 'gray.700' }}
        right={'8vw'}
        w={'5'}
        h={'10'}
        rounded={'full'}
        onClick={onOpen}
      ></IconButton>
      <AvatarModal
        onClose={onClose}
        isOpen={isOpen}
        modalRef={modalRef}
        profilePicture={profilePicture}
        clientId={clientId}
        userId={userId}
      />
    </div>
  );
};
