import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { UserCard } from './UserCard';

export const BrokerSelect = ({ setSelectedUser, setContinue }) => {
  const { searchedUsers } = useSelector((state) => state.users);
  return (
    <Flex>
      {searchedUsers?.map((user) => {
        return (
          <UserCard
            setSelectedUser={setSelectedUser}
            setContinue={setContinue}
            username={user.username}
            userId={user.id}
          />
        );
      })}
    </Flex>
  );
};
