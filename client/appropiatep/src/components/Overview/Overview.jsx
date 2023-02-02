import {
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

export const Overview = () => {
  return (
    <Box
      bg={'whiteAlpha.800'}
      zIndex={'3'}
      pos={'absolute'}
      left={'20%'}
      h={'92vh'}
      w={'75vw'}
      borderRadius={'15px'}
      ml={'2.5vw'}
      mt={'4vh'}
    >
      <Grid
        templateAreas={`"blog week"
      "appointments week"`}
        gridTemplateRows={'60vh 29vh'}
        gridTemplateColumns={'1fr 0.4fr'}
        gridGap={3}
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem
          area={'week'}
          mr={'1vw'}
          mt={'1vw'}
          bg={'gray.200'}
          borderRadius={'15px'}
        >
          <VStack
            alignItems={'left'}
            paddingBlock={'2vh'}
            pl={'1vw'}
            pr={'1vw'}
          >
            <Text
              color={'blue.400'}
              textAlign={'left'}
              fontSize={'1.5vw'}
              mb={'1vh'}
            >
              En los ultimos 7 dias:
            </Text>
            <HStack
              bg={'blue.600'}
              h={'18vh'}
              borderRadius={'0% 35px 0% 35px  '}
              w={'18vw'}
              p={3}
            >
              <Box h={'100%'} w={'50%'}>
                <Text
                  textAlign={'center'}
                  fontSize={'4.2vw'}
                  fontWeight={'light'}
                  color={'white'}
                >
                  56%
                </Text>
              </Box>
              <Box h={'100%'} w={'50%'}>
                <Text fontSize={'1.2vw'} fontWeight={'normal'} color={'white'}>
                  Asesorias con clientes no registrados
                </Text>
              </Box>
            </HStack>
            <HStack
              bg={'blue.700'}
              h={'18vh'}
              borderRadius={'0% 35px 0% 35px  '}
              w={'18vw'}
              p={4}
            >
              <Box h={'100%'} w={'50%'} verticalAlign={'center'}>
                <Text
                  textAlign={'center'}
                  fontSize={'4.2vw'}
                  fontWeight={'light'}
                  color={'white'}
                >
                  6
                </Text>
              </Box>
              <Box h={'100%'} w={'50%'} paddingBlock={'3vh'}>
                <Text
                  fontSize={'1.2vw'}
                  fontWeight={'normal'}
                  color={'white'}
                  verticalAlign={'center'}
                >
                  Consultas por propiedades
                </Text>
              </Box>
            </HStack>
            <HStack
              bg={'blue.900'}
              h={'18vh'}
              borderRadius={'0% 35px 0% 35px  '}
              w={'18vw'}
              p={4}
            >
              <Box h={'100%'} w={'50%'}>
                <Text
                  textAlign={'center'}
                  fontSize={'4.2vw'}
                  fontWeight={'light'}
                  color={'white'}
                >
                  26
                </Text>
              </Box>
              <Box h={'100%'} w={'50%'}>
                <Text fontSize={'1.2vw'} fontWeight={'normal'} color={'white'}>
                  Nuevos Clientes Registrados
                </Text>
              </Box>
            </HStack>
            <HStack
              bg={'black'}
              h={'18vh'}
              borderRadius={'0% 35px 0% 35px  '}
              w={'18vw'}
              p={4}
            >
              <Box h={'100%'} w={'50%'}>
                <Text
                  textAlign={'center'}
                  fontSize={'4.2vw'}
                  fontWeight={'light'}
                  color={'white'}
                >
                  12
                </Text>
              </Box>
              <Box h={'100%'} w={'50%'}>
                <Text fontSize={'1.2vw'} fontWeight={'normal'} color={'white'}>
                  Asesorias realizadas con exito
                </Text>
              </Box>
            </HStack>
          </VStack>
        </GridItem>
      </Grid>
      Overview
    </Box>
  );
};
