import {
  Avatar,
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Select,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBrokers } from '../../redux/brokers/brokersAction';
import { getUsers } from '../../redux/users/usersAction';
import { BrokerCreationPanel } from './Components/BrokerCreationPanel';
import { BrokerForm } from './Components/BrokerForm';
import { BrokerList } from './Components/BrokerList';

export const BrokerPanel = ({ setOption, Option }) => {
  const dispatch = useDispatch();
  const { brokers, createdBroker, error, success } = useSelector(
    (state) => state.brokers
  );
  const { users } = useSelector((state) => state.users);
  const [BasicInfoState, setBasicInfoState] = React.useState('pending');
  const [TabIndex, setTabIndex] = React.useState(0);
  const [SelectedUser, setSelectedUser] = React.useState('');
  const [Continue, setContinue] = React.useState(false);
  const handleTabChange = (index) => {
    setTabIndex(index);
  };
  React.useEffect(() => {
    dispatch(getBrokers());
    dispatch(getUsers());
  }, [TabIndex]);
  const opciones = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  //console.log(brokers[0]);
  let formatDate = new Date(createdBroker?.createdAt);
  formatDate = formatDate.toLocaleDateString('es-CL', opciones);
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <Box
      bg={'whiteAlpha.800'}
      h={'92vh'}
      w={'75vw'}
      pos={'absolute'}
      left={'20%'}
      borderRadius={'15px'}
      ml={'2.5vw'}
      mt={'4vh'}
    >
      <Tabs
        index={TabIndex}
        onChange={handleTabChange}
        isFitted
        variant="enclosed-colored"
      >
        <TabList>
          <Tab
            bg={'whiteAlpha.900'}
            color={'black'}
            borderBottom={'1px solid gray'}
            borderRadius={'15px 0% 0% 0%'}
            _selected={{ color: 'white', bg: 'blue.600' }}
            _hover={{}}
          >
            Brokers Overview
          </Tab>
          <Tab
            bg={'whiteAlpha.900'}
            color={'black'}
            borderBottom={'1px solid gray'}
            _selected={{ color: 'white', bg: 'blue.600' }}
          >
            Crear Broker
          </Tab>
          <Tab
            bg={'whiteAlpha.900'}
            color={'black'}
            borderBottom={'1px solid gray'}
            _selected={{ color: 'white', bg: 'blue.600' }}
            borderRadius={'0% 15px 0% 0%'}
          >
            Modificar Broker
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <BrokerList brokers={brokers} />
          </TabPanel>
          <TabPanel>
            {Continue === false ? (
              users?.map((user) => {
                return (
                  <Box>
                    <Text>{user.username}</Text>
                    <Button
                      onClick={() => {
                        setSelectedUser(user.id);
                        setContinue(true);
                      }}
                    >
                      Convertir en Broker
                    </Button>
                  </Box>
                );
              })
            ) : (
              <BrokerCreationPanel
                setContinue={setContinue}
                id={createdBroker?.id}
                username={createdBroker?.username}
                email={createdBroker?.email}
                createdAt={formatDate}
                createdBroker={createdBroker}
                SelectedUser={SelectedUser}
                setBasicInfoState={setBasicInfoState}
                handleTabChange={handleTabChange}
              ></BrokerCreationPanel>
            )}
          </TabPanel>
          <TabPanel>
            <p>Form de modificacion</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
