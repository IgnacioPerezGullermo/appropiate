import {
  Avatar,
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  HStack,
  Input,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import React from 'react';

export const BrokerList = ({ brokers }) => {
  console.log(brokers);
  return (
    <Grid
      templateAreas={`"card card"
  "appo appo"`}
      gridTemplateRows={'54vh 26vh'}
      gridTemplateColumns={'0.7fr 1fr'}
      gridGap={3}
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem area={'card'} p={'2vh'}>
        <Input />
        <HStack spacing={'1.5vw'}>
          {brokers?.map((broker) => {
            return (
              <Box
                bg={'white'}
                boxShadow={'md'}
                textAlign={'center'}
                w={'23%'}
                h={'50vh'}
                borderRadius={'15px'}
                p={0}
              >
                <Box
                  borderRadius={'15px 15px 0% 0%'}
                  h={'20vh'}
                  bg={'blue.200'}
                >
                  <Avatar
                    mt={'2vh'}
                    size={'2xl'}
                    src={broker.profilePicture}
                  ></Avatar>
                </Box>
                <Text>{broker.firstName}</Text>
                <Text>{broker.lastName}</Text>
                <Text>
                  {new Date(broker.createdAt).toLocaleDateString('es')}
                </Text>
                <Text>{broker.type}</Text>
                <Button
                  bg={'blue.600'}
                  color={'white'}
                  mt={'2vh'}
                  position={'relative'}
                  bottom={'-8vh'}
                >
                  Ver detalles
                </Button>
              </Box>
            );
          })}
        </HStack>
      </GridItem>
      <GridItem area={'appo'} p={8} verticalAlign={'center'}>
        <Heading fontFamily={'body'} fontSize={'2vw'}>
          Aca mostraremos las asesorias que tiene el Broker Seleccionado
        </Heading>
      </GridItem>
    </Grid>
  );
};
