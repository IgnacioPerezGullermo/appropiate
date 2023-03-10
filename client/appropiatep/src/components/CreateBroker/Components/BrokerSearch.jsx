import {
  Box,
  Button,
  Center,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { UilSearch } from '@iconscout/react-unicons';
import React from 'react';
import { BrokerCreationPanel } from './BrokerCreationPanel';
import { BrokerSelect } from './BrokerSelect';

export const BrokerSearch = ({
  Continue,
  users,
  selectedUser,
  setSelectedUser,
  setBasicInfoState,
  setContinue,
  setSearched,
}) => {
  function handleInputChange(e) {
    setSearched(e.target.value);
  }

  function renderSwitch(arg) {
    switch (arg) {
      case false:
        return (
          <Box>
            <Center>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type="text"
                  placeholder="Busca usuarios..."
                  bg={'white'}
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="md">
                    <UilSearch size={'1.5vw'} />
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Center>
            <BrokerSelect
              setSelectedUser={setSelectedUser}
              setContinue={setContinue}
            />
          </Box>
        );
      case true:
        return (
          <BrokerCreationPanel
            setBasicInfoState={setBasicInfoState}
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
            setContinue={setContinue}
          />
        );
      default:
        return <BrokerSelect />;
    }
  }

  return <Box>{renderSwitch(Continue)}</Box>;
};
