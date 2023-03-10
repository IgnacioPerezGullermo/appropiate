import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import BackgroundPanel from '../assets/backgroundpanel.jpg';
import { AppointmentPanel } from '../components/AppointmentPanel/AppointmentPanel';
import { BrokerPanel } from '../components/CreateBroker/BrokerPanel';
import { CreatePost } from '../components/CreatePost/CreatePost';
import { Overview } from '../components/Overview/Overview';
import { SideBar } from '../components/SideBar/SideBar';
import { PropiertyPanel } from '../components/CreateProperty/PropiertyPanel';

export const AdminPanel = ({ admin }) => {
  const [Option, setOption] = useState('dashboard');
  function renderSwitch(arg) {
    switch (arg) {
      case 'dashboard':
        return <Overview />;
      case 'createBroker':
        return <BrokerPanel setOption={setOption} Option={Option} />;
      case 'blog':
        return <CreatePost />;
      case 'appointments':
        return <AppointmentPanel />;
      case 'createPropierty':
        return <PropiertyPanel />;
      default:
        return <Overview />;
    }
  }
  return (
    <Box>
      <SideBar Option={Option} setOption={setOption} />
      <Box>
        <Box
          h={'100vh'}
          w={'80vw'}
          pos={'absolute'}
          top={'0%'}
          left={'20%'}
          bg={'gray.300'}
        ></Box>
        {renderSwitch(Option)}
      </Box>
    </Box>
  );
};
