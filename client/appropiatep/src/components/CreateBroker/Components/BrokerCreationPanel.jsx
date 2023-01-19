import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  Heading,
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
import React from 'react';
import { BrokerForm } from './BrokerForm';
import { useDispatch } from 'react-redux';
import { clearCreatedBroker } from '../../../redux/action';

export const BrokerCreationPanel = ({
  id,
  username,
  email,
  createdAt,
  createdBroker,
  setBasicInfoState,
  handleTabChange,
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
        {createdBroker?.length === 0 ? (
          <Box
            h={'80vh'}
            w={'99%'}
            mt={'1vh'}
            bg={'blackAlpha.500'}
            p={3}
            borderRadius={'15px'}
          >
            <BrokerForm
              createdBroker={createdBroker}
              setBasicInfoState={setBasicInfoState}
            />
          </Box>
        ) : (
          <Box
            h={'80vh'}
            w={'99%'}
            mt={'1vh'}
            bg={'blackAlpha.500'}
            p={3}
            borderRadius={'15px'}
            textAlign={'center'}
            alignContent={'center'}
          >
            <Heading mt={'8vh'} mb={'2vh'}>
              Creado con exito
            </Heading>
            <Text mb={'3vh'}>Continua con la siguientes opciones:</Text>
            <Button
              mt={'5vh'}
              mb={'2vh'}
              onClick={() => {
                dispatch(clearCreatedBroker());
              }}
            >
              Crear otro usuario
            </Button>
            <Divider
              orientation="horizontal"
              w={'50%'}
              ml={'25%'}
              marginBlock={'2vh'}
            />
            <Button
              mt={'2vh'}
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
        {createdBroker?.length === 0 ? (
          <Box
            h={'80vh'}
            w={'99%'}
            mt={'1vh'}
            bg={'blackAlpha.500'}
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
            ></SkeletonText>
            <SkeletonCircle size={'20vh'} ml={'30%'} />
            <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
          </Box>
        ) : (
          <Box
            h={'80vh'}
            w={'28.5vw'}
            mt={'1vh'}
            bg={'blackAlpha.500'}
            p={3}
            borderRadius={'15px'}
            textAlign={'center'}
          >
            <Heading textAlign={'center'} mt={'4vh'} color={'blue.400'}>
              {username.toUpperCase()}
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
            <Text>{createdAt}</Text>
          </Box>
        )}
      </GridItem>
    </Grid>
  );
};
