import {
  Avatar,
  Box,
  Grid,
  GridItem,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBroker } from '../../redux/action';
import { BrokerCreationPanel } from './Components/BrokerCreationPanel';
import { BrokerForm } from './Components/BrokerForm';
import { BrokerList } from './Components/BrokerList';

export const BrokerPanel = ({ setOption, Option }) => {
  const dispatch = useDispatch();
  const [BasicInfoState, setBasicInfoState] = React.useState('pending');
  const [TabIndex, setTabIndex] = React.useState(0);
  const handleTabChange = (index) => {
    setTabIndex(index);
  };
  React.useEffect(() => {
    dispatch(getBroker());
  }, [TabIndex]);

  const createdBroker = useSelector((state) => state.createdBroker);
  const authToken = useSelector((state) => state.authToken);
  const brokers = useSelector((state) => state.brokers);
  const opciones = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  console.log(brokers[0]);
  let formatDate = new Date(createdBroker?.createdAt);
  formatDate = formatDate.toLocaleDateString('es-CL', opciones);
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <Box
      bg={'whiteAlpha.400'}
      h={'92vh'}
      w={'75vw'}
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
            bg={'blue.900'}
            color={'blue.400'}
            border={'none'}
            borderRadius={'15px 0% 0% 0%'}
            _selected={{ color: 'white', bg: 'blue.500' }}
          >
            Brokers Overview
          </Tab>
          <Tab
            bg={'blue.900'}
            color={'blue.400'}
            border={'none'}
            _selected={{ color: 'white', bg: 'blue.500' }}
          >
            Crear Broker
          </Tab>
          <Tab
            bg={'blue.900'}
            color={'blue.400'}
            border={'none'}
            _selected={{ color: 'white', bg: 'blue.500' }}
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
            <BrokerCreationPanel
              id={createdBroker?.id}
              username={createdBroker?.username}
              email={createdBroker?.email}
              createdAt={formatDate}
              createdBroker={createdBroker}
              setBasicInfoState={setBasicInfoState}
              handleTabChange={handleTabChange}
            ></BrokerCreationPanel>
          </TabPanel>
          <TabPanel>
            <p>Form de modificacion</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
