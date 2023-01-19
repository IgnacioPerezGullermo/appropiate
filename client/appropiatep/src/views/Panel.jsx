import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import { CreateAppointment } from '../components/CreateAppointment/CreateAppointment';
import { BrokerPanel } from '../components/CreateBroker/BrokerPanel';
import { CreatePost } from '../components/CreatePost/CreatePost';
import { Overview } from '../components/Overview/Overview';
import { SideBar } from '../components/SideBar/SideBar';

export const Panel = () => {
  const [Option, setOption] = useState('home');
  function renderSwitch(arg) {
    switch (arg) {
      case 'home':
        return <Overview />;
      case 'createBroker':
        return <BrokerPanel setOption={setOption} Option={Option} />;
      case 'blog':
        return <CreatePost />;
      case 'appointments':
        return <CreateAppointment />;
      default:
        return <Overview />;
    }
  }
  return (
    <Box>
      <SideBar Option={Option} setOption={setOption} />
      <Box
        h={'100vh'}
        w={'80vw'}
        pos={'absolute'}
        top={'0%'}
        left={'20%'}
        bg={'gray.600'}
      >
        {renderSwitch(Option)}
      </Box>
    </Box>
  );
};
