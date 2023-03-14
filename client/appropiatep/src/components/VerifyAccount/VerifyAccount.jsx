import { Box, Center, Spinner, Text } from '@chakra-ui/react';
import { UilCheck } from '@iconscout/react-unicons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { verifyUser } from '../../redux/users/usersAction';

export const VerifyAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const userId = searchParams.get('id');
  //console.log(searchParams.get('id'));
  const { verificationState, verificationLoading } = useSelector(
    (state) => state.users
  );
  React.useEffect(() => {
    if (verificationState === false) {
      dispatch(verifyUser(userId));
      console.log('Verificacion pendiente', userId);
    }
    if (verificationState === true) {
      console.log('Verificacion exitosa');
      setTimeout(() => {
        navigate('/');
      }, 4000);
    }
  }, [verificationState]);

  return (
    <Box w={'full'} h={'full'} bg={'gray.800'}>
      <Text color={'primary'} textAlign={'center'} mt={'10%'} fontSize={'2xl'}>
        Tu cuenta fue verificada con exito
      </Text>
      <Center>
        {verificationLoading ? (
          <Spinner />
        ) : (
          <UilCheck size={100} color={'#19C8C4'} />
        )}
      </Center>
    </Box>
  );
};
