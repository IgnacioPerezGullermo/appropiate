import {
  Avatar,
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
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
      gridTemplateRows={'35vh 45vh'}
      gridTemplateColumns={'0.7fr 1fr'}
      gridGap={3}
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem area={'card'} bg={'blackAlpha.500'} p={'2vh'}>
        <HStack spacing={'1.5vw'}>
          {brokers?.map((broker) => {
            return (
              <Box
                bg={'blue.500'}
                textAlign={'center'}
                w={'20%'}
                h={'99%'}
                borderRadius={'15px'}
                p={3}
              >
                <Avatar size={'xl'}></Avatar>
                <Text>{broker.username}</Text>
                <Text>{broker.email}</Text>
                <Text>
                  {new Date(broker.createdAt).toLocaleDateString('es')}
                </Text>
                <Text>{broker.type}</Text>
              </Box>
            );
          })}
        </HStack>
      </GridItem>
      <GridItem
        area={'appo'}
        bg={'blackAlpha.500'}
        p={8}
        verticalAlign={'center'}
      >
        <Heading>
          Aca mostraremos las asesorias que tiene el Broker Seleccionado
        </Heading>
      </GridItem>
    </Grid>
  );
};
