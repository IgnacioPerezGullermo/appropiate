import {
  Avatar,
  Box,
  Button,
  Input,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import axios from 'axios';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBrokers } from '../../redux/brokers/brokersAction';
import { getSearchedUsers } from '../../redux/users/usersAction';
import { BrokerCreationPanel } from './Components/BrokerCreationPanel';
import { BrokerForm } from './Components/BrokerForm';
import { BrokerList } from './Components/BrokerList';
import { BrokerSearch } from './Components/BrokerSearch';

export const BrokerPanel = ({ setOption, Option }) => {
  const dispatch = useDispatch();
  const { brokers, createdBroker, error, success } = useSelector(
    (state) => state.brokers
  );
  const { searchedUsers } = useSelector((state) => state.users);
  const [BasicInfoState, setBasicInfoState] = React.useState('pending');
  const [TabIndex, setTabIndex] = React.useState(0);
  const [Searched, setSearched] = React.useState('');
  const [SelectedUser, setSelectedUser] = React.useState('');
  const [Continue, setContinue] = React.useState(false);
  const [Page, setPage] = React.useState(0);
  const [PageSize, setPageSize] = React.useState(4);
  const handleTabChange = (index) => {
    setTabIndex(index);
  };
  React.useEffect(() => {
    dispatch(getBrokers({ page: Page, pageSize: 4 }));
    dispatch(getSearchedUsers(Searched));
  }, [TabIndex, Searched, Page]);
  const opciones = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  //
  console.log(brokers);
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
          <TabPanel p={1}>
            <BrokerList
              Page={Page}
              setPage={setPage}
              PageSize={PageSize}
              brokers={brokers}
            />
          </TabPanel>
          <TabPanel>
            <BrokerSearch
              setSearched={setSearched}
              Continue={Continue}
              selectedUser={SelectedUser}
              setSelectedUser={setSelectedUser}
              setContinue={setContinue}
              setBasicInfoState={setBasicInfoState}
            />
          </TabPanel>
          <TabPanel>
            <p>Form de modificacion</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
