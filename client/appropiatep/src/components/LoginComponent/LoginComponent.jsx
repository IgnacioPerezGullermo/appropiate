import { Box, Button } from '@chakra-ui/react';
import { UilArrowLeft } from '@iconscout/react-unicons';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from './LoginForm/LoginForm';
import { PasswordRecovery } from './PasswordRecovery/PasswordRecovery';
import { SigninForm } from './SigninForm/SinginForm';

export const LoginComponent = ({
  setLocation,
  PreviousPath,
  setPreviousPath,
}) => {
  const navigate = useNavigate();
  const [Option, setOption] = React.useState('login');
  function renderSwitch(arg) {
    switch (arg) {
      case 'login':
        return <LoginForm Option={Option} setOption={setOption} />;
      case 'signin':
        return <SigninForm Option={Option} setOption={setOption} />;
      case 'password':
        return <PasswordRecovery Option={Option} setOption={setOption} />;
      default:
        return <LoginForm Option={Option} setOption={setOption} />;
    }
  }
  return (
    <Box>
      {renderSwitch(Option)}
      <Button
        pos={'absolute'}
        left={'10'}
        top={'5'}
        size={'lg'}
        bg={'black'}
        rounded={'full'}
        _hover={{ bg: 'black' }}
        onClick={() => {
          navigate('/');
        }}
      >
        <UilArrowLeft size={40} color={'white'} />
        Ir al Inicio
      </Button>
    </Box>
  );
};
