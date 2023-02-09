import { Avatar, Box, Button, Center, Text } from '@chakra-ui/react';
import React from 'react';

export const UserCard = ({
  setSelectedUser,
  setContinue,
  username,
  userId,
}) => {
  return (
    <Box
      width={'12vw'}
      h={'24vh'}
      borderRadius={'lg'}
      boxShadow={'base'}
      m={3}
      bg={'blue.200'}
    >
      <Center>
        <Avatar mt="2" />
      </Center>
      <Text textAlign={'center'}>{username}</Text>
      <Center>
        <Button
          position={'relative'}
          top={'8vh'}
          w={'11vw'}
          onClick={() => {
            setSelectedUser(userId);
            setContinue(true);
          }}
        >
          Convertir en Broker
        </Button>
      </Center>
    </Box>
  );
};
