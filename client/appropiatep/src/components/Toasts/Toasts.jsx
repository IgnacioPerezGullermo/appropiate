import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export function Toasts({ opt, userName }) {
  const navigate = useNavigate();
  const toast = useToast();
  function renderSwitch(arg) {
    switch (arg) {
      case 'Log In Sucess Broker':
        return toast({
          title: `Bienvenido ${userName}`,
          description: 'En momentos te redirigiremos al inicio',
          status: 'success',
          duration: 5000,
          isClosable: true,
          onCloseComplete: navigate('/brokerdashboard'),
        });
      case 'Log In Sucess Client':
        return toast({
          title: `Bienvenido ${userName}`,
          description: 'En momentos te redirigiremos al inicio',
          status: 'success',
          duration: 5000,
          isClosable: true,
          onCloseComplete: navigate('/home'),
        });
      case 'Register Success':
        return toast({
          title: 'Cuenta creada con exito',
          description: 'Revisa tu mail para confirmar tu cuenta',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      default:
        return null;
    }
  }
  return <Box>{renderSwitch(opt, userName)}</Box>;
}
