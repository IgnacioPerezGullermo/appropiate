import { Box } from '@chakra-ui/react';
import React from 'react';
import { LoginForm } from './LoginForm/LoginForm';
import { SigninForm } from './SigninForm/SinginForm';

export const LoginComponent = () => {
  const [Option, setOption] = React.useState('login');
  return (
    <Box>
      {Option === 'login' ? (
        <LoginForm Option={Option} setOption={setOption} />
      ) : (
        <SigninForm Option={Option} setOption={setOption} />
      )}
    </Box>
  );
};
