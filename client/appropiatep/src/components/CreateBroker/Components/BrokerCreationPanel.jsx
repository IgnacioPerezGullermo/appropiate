import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  Heading,
  Icon,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import { UilCheck } from '@iconscout/react-unicons';
import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCreatedBroker } from '../../../redux/brokers/brokersAction';
import { BrokerForm } from './BrokerForm';

export const BrokerCreationPanel = ({
  id,
  username,
  email,
  createdAt,
  createdBroker,
  SelectedUser,
  setBasicInfoState,
  handleTabChange,
  setContinue,
  setSelectedUser,
}) => {
  const dispatch = useDispatch();
  return (
    <Grid
      templateAreas={`"card form"
      "footer footer"`}
      gridTemplateRows={'82vh'}
      gridTemplateColumns={'0.7fr 1fr'}
      gridGap={3}
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" area={'form'}>
        {createdBroker?.id === undefined ? (
          <Box
            h={'80vh'}
            w={'99%'}
            mt={'1vh'}
            bg={'white'}
            p={3}
            borderRadius={'15px'}
          >
            <BrokerForm
              createdBroker={createdBroker}
              SelectedUser={SelectedUser}
              setBasicInfoState={setBasicInfoState}
              setSelectedUser={setSelectedUser}
              setContinue={setContinue}
            />
          </Box>
        ) : (
          <Box
            h={'80vh'}
            w={'99%'}
            mt={'1vh'}
            bg={'white'}
            p={3}
            borderRadius={'15px'}
            textAlign={'center'}
            alignContent={'center'}
          >
            <Box mb={0} alignItems={'center'} ml={'32%'}>
              <UilCheck size="200" color="#4299E1" />
            </Box>
            <Heading mt={'0vh'} mb={'2vh'} color={'blue.400'}>
              Creado con exito
            </Heading>
            <Text mb={'3vh'}>Continua con la siguientes opciones:</Text>
            <Button
              mt={'5vh'}
              mb={'2vh'}
              bg={'blue.600'}
              color={'white'}
              h={'6vh'}
              _hover={{ bg: 'blue.400', color: 'white' }}
              onClick={() => {
                setContinue(false);
                dispatch(clearCreatedBroker());
              }}
            >
              Crear otro usuario
            </Button>
            <Divider
              orientation="horizontal"
              variant={'solid'}
              size={'100px'}
              w={'50%'}
              ml={'25%'}
              marginBlock={'2vh'}
              colorScheme="blue"
            />
            <Button
              mt={'2vh'}
              bg={'blue.600'}
              color={'white'}
              h={'6vh'}
              _hover={{ bg: 'blue.400', color: 'white' }}
              onClick={() => {
                handleTabChange(2);
              }}
            >
              Actualizar usuario
            </Button>
          </Box>
        )}
      </GridItem>
      <GridItem pl="2" area={'card'}>
        {createdBroker?.id === undefined ? (
          <Box
            h={'80vh'}
            w={'99%'}
            mt={'1vh'}
            bg={'white'}
            p={3}
            borderRadius={'15px'}
            textAlign={'center'}
            alignContent={'center'}
            pl={'1vw'}
            pr={'1vw'}
            paddingBlock={'3vh'}
          >
            <Text
              textAlign={'center'}
              mb={'4vh'}
              color={'blue.400'}
              textTransform={'initial'}
            >
              Aqui veras la informacion de Broker creado:
            </Text>
            <SkeletonText
              noOfLines={1}
              mb={'2vh'}
              skeletonHeight={'6'}
              w={'40%'}
              ml={'30%'}
              speed={'1.2'}
              startColor={'blackAlpha.500'}
              endColor={'blackAlpha.200'}
            ></SkeletonText>
            <SkeletonCircle
              size={'20vh'}
              ml={'30%'}
              speed={'1.2'}
              startColor={'blackAlpha.500'}
              endColor={'blackAlpha.200'}
            />
            <SkeletonText
              mt="4"
              noOfLines={4}
              spacing="4"
              skeletonHeight="2"
              speed={'1.2'}
              startColor={'blackAlpha.500'}
              endColor={'blackAlpha.200'}
            />
          </Box>
        ) : (
          <Box
            h={'80vh'}
            w={'28.5vw'}
            mt={'1vh'}
            bg={'white'}
            p={3}
            borderRadius={'15px'}
            textAlign={'center'}
          >
            <Heading textAlign={'center'} mt={'4vh'} color={'blue.400'}>
              {username?.toUpperCase()}
            </Heading>
            <Avatar mt={'0.8vh'} size={'2xl'}></Avatar>
            <Text
              fontSize={'1.3vw'}
              mt={'2vh'}
              fontWeight={'bold'}
              color={'blue.400'}
            >
              E-mail
            </Text>
            <Text fontSize={'1vw'} mb={'2vh'}>
              {email}
            </Text>
            <Text fontSize={'1.3vw'} fontWeight={'bold'} color={'blue.400'}>
              Creado el:
            </Text>
            <Text fontSize={'1vw'} mb={'2vh'}>
              {createdAt !== '' ? createdAt : ''}
            </Text>
          </Box>
        )}
      </GridItem>
    </Grid>
  );
};
