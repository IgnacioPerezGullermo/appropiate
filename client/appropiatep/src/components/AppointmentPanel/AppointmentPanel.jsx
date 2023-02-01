import { Box, Tabs, Tab, TabPanels, TabPanel, TabList } from '@chakra-ui/react';
import React from 'react';
import { AppointmentForm } from './Components/AppointmentForm';

export const AppointmentPanel = () => {
  const [TabIndex, setTabIndex] = React.useState(0);
  const handleTabChange = (index) => {
    setTabIndex(index);
  };
  return (
    <Box
      bg={'secondary'}
      opacity={'0.9'}
      pos={'absolute'}
      left={'20%'}
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
            bg={'whiteAlpha.900'}
            color={'black'}
            borderBottom={'1px solid gray'}
            borderRadius={'15px 0% 0% 0%'}
            _selected={{ color: 'white', bg: 'blue.600' }}
            _hover={{}}
          >
            Vista General
          </Tab>
          <Tab
            bg={'whiteAlpha.900'}
            color={'black'}
            borderBottom={'1px solid gray'}
            _selected={{ color: 'white', bg: 'blue.600' }}
          >
            Crear Asesorias
          </Tab>
          <Tab
            bg={'whiteAlpha.900'}
            color={'black'}
            borderBottom={'1px solid gray'}
            _selected={{ color: 'white', bg: 'blue.600' }}
            borderRadius={'0% 15px 0% 0%'}
          >
            Modificar Asesoria
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel></TabPanel>
          <TabPanel>
            <AppointmentForm TabIndex={TabIndex} />
          </TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
