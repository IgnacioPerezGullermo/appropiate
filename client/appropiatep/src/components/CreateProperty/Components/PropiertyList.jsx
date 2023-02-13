import {
  Box,
  Button,
  Divider,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  UilBath,
  UilBed,
  UilBox,
  UilCar,
  UilPercentage,
} from '@iconscout/react-unicons';
import React from 'react';
import { Pagination } from '../../Pagination/Pagination';

export const PropiertyList = ({
  propierties,
  Page,
  setPage,
  PageSize,
  setSearched,
}) => {
  const handleInputChange = (e) => {
    setSearched(e.target.value);
  };
  console.log(propierties?.total > PageSize);
  return (
    <Grid
      templateAreas={`"card card"
    "appo appo"`}
      gridTemplateRows={'74vh 6vh'}
      gridTemplateColumns={'0.7fr 1fr'}
      gridGap={3}
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem area={'card'} p={'2vh'} pt={0}>
        <InputGroup size="md" mb={4} mt={0}>
          <Input
            pr="4.5rem"
            type="text"
            placeholder="Busca usuarios..."
            bg={'gray.900'}
            color={'white'}
            focusBorderColor={'teal.300'}
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
        </InputGroup>
        <SimpleGrid columns={2} spacing={'1.5vw'}>
          {propierties?.data?.map((prop) => {
            return (
              <Box
                bg={'gray.700'}
                boxShadow={'md'}
                textAlign={'left'}
                w={'100%'}
                h={'33vh'}
                borderRadius={'15px'}
                display={'grid'}
                gridTemplateAreas={`'image info'`}
                gridTemplateColumns={'0.8fr 1fr'}
                gridTemplateRows={'1fr'}
                overflow={'hidden'}
              >
                <GridItem gridArea={'image'}>
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-xaIPATS-Hup0_r3HzAe5KIkUX7hXfARENw&usqp=CAU"
                    alt=""
                    objectFit={'cover'}
                    h={'full'}
                  />
                </GridItem>
                <GridItem gridArea={'info'} pl={3} pt={2}>
                  <Heading
                    textTransform={'uppercase'}
                    fontSize={30}
                    color={'teal.300'}
                  >
                    {prop.projectname}
                  </Heading>
                  <Text mt={1} color={'white'} fontWeight={'light'}>
                    {prop.commune}, {prop.region}
                  </Text>
                  <Divider mt={1} w={'96%'} bg={'blue.800'} />
                  <HStack mt={1} justify={'space-between'} p={2}>
                    <Box display={'flex'} flexDirection={'row'}>
                      <UilBed color={'#4FD1C5'} />
                      <Text ml={1} color={'white'} fontWeight={'light'}>
                        {prop.bedr}
                      </Text>
                    </Box>
                    <Box display={'flex'} flexDirection={'row'}>
                      <UilBath color={'#4FD1C5'} />
                      <Text ml={1} color={'white'} fontWeight={'light'}>
                        {prop.bath}
                      </Text>
                    </Box>
                    <Box display={'flex'} flexDirection={'row'}>
                      <UilBox color={'#4FD1C5'} />
                      <Text ml={1} color={'white'} fontWeight={'light'}>
                        {prop.storage}
                      </Text>
                    </Box>
                    <Box display={'flex'} flexDirection={'row'}>
                      <UilCar color={'#4FD1C5'} />
                      <Text ml={1} color={'white'} fontWeight={'light'}>
                        {prop.parking}
                      </Text>
                    </Box>
                  </HStack>
                  <HStack justify={'space-evenly'} mt={2}>
                    <VStack>
                      <Text color={'white'} fontWeight={'light'} mb={'-1.2vh'}>
                        Cap Rate
                      </Text>
                      <Box display={'flex'} flexDirection={'row'} spacing={0}>
                        <Text color={'white'} fontWeight={'light'}>
                          {prop.caprate}
                        </Text>
                        <UilPercentage color={'#4FD1C5'} />
                      </Box>
                    </VStack>
                    <VStack>
                      <Text color={'white'} fontWeight={'light'} mb={'-1.2vh'}>
                        Precio
                      </Text>
                      <HStack>
                        <Text color={'white'} fontWeight={'light'}>
                          {prop.price}
                        </Text>
                        <Text color={'teal.300'}> UF</Text>
                      </HStack>
                    </VStack>
                  </HStack>
                  <Button
                    variant={'sidebarButton'}
                    bg={'teal.300'}
                    color={'black'}
                    mt={'2vh'}
                    w={'96%'}
                  >
                    Ver detalles
                  </Button>
                </GridItem>
              </Box>
            );
          })}
        </SimpleGrid>
      </GridItem>
      <GridItem area={'appo'}>
        {propierties?.total > PageSize && (
          <Pagination
            page={Page}
            pageSize={PageSize}
            setPage={setPage}
            total={propierties?.total}
          />
        )}
      </GridItem>
    </Grid>
  );
};
