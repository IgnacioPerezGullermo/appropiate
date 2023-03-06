import { Box } from '@chakra-ui/react';
//import { UilArrowLeft, UilMoon, UilSun } from '@iconscout/react-unicons';
import React from 'react';
import { LoginForm } from '../components/LoginComponent/LoginForm/LoginForm';
import { UpgradeForm } from '../components/LoginComponent/UpgradeFrom';
/*import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { createClient } from '../redux/clients/clientsAction';*/

export const Register = () => {
  const [Option, setOption] = React.useState('upgrade');
  return (
    <Box>
      {Option === 'upgrade' ? (
        <UpgradeForm Option={Option} setOption={setOption} />
      ) : (
        <LoginForm Option={Option} setOption={setOption} />
      )}
    </Box>
  );
};
