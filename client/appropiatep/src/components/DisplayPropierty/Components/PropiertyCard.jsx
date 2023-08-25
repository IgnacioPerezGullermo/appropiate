import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Divider,
  grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
  Tooltip,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import {
  UilBath,
  UilBed,
  UilBox,
  UilCar,
  UilFastMail,
  UilPercentage,
} from '@iconscout/react-unicons';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const PropiertyCard = ({
  bedr,
  bath,
  id,
  price,
  commune,
  region,
  storage,
  parking,
  caprate,
  match,
  projectname,
}) => {
  const navigate = useNavigate();
  const bg = useColorModeValue('white', 'black');
  const color = useColorModeValue('black', 'white');
  const bgButton = useColorModeValue('primary', 'transparent');
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
      {match === true ? <Badge colorScheme={'yellow'}>MATCH</Badge> : null}
      <GridItem gridArea={'image'}>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-xaIPATS-Hup0_r3HzAe5KIkUX7hXfARENw&usqp=CAU"
          alt=""
          objectFit={'cover'}
          h={'full'}
        />
      </GridItem>
      <GridItem gridArea={'info'} pl={3} pt={2}>
        <Heading fontSize={'1.5vw'} mt={1} color={'white'} fontWeight={'light'}>
          {projectname}
        </Heading>
        <Text mt={1} fontWeight={'light'} color={'primary'}>
          {commune}, {region}
        </Text>
        <Divider mt={1} w={'96%'} bg={'blue.800'} />
        <HStack mt={1} justify={'space-between'} p={2}>
          <Box display={'flex'} flexDirection={'row'}>
            <UilBed color={'#4FD1C5'} />
            <Text ml={1} color={'white'} fontWeight={'light'}>
              {bedr}
            </Text>
          </Box>
          <Box display={'flex'} flexDirection={'row'}>
            <UilBath color={'#4FD1C5'} />
            <Text ml={1} color={'white'} fontWeight={'light'}>
              {bath}
            </Text>
          </Box>
          <Box display={'flex'} flexDirection={'row'}>
            <UilBox color={'#4FD1C5'} />
            <Text ml={1} color={'white'} fontWeight={'light'}>
              {storage}
            </Text>
          </Box>
          <Box display={'flex'} flexDirection={'row'}>
            <UilCar color={'#4FD1C5'} />
            <Text ml={1} color={'white'} fontWeight={'light'}>
              {parking}
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
                {caprate}
              </Text>
            </Box>
          </VStack>
          <VStack>
            <Text color={'white'} fontWeight={'light'} mb={'-1.2vh'}>
              Precio
            </Text>
            <HStack>
              <Text color={'white'} fontWeight={'light'}>
                {price}
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
          onClick={() => {
            navigate(`/propierty/${id}`);
          }}
        >
          Ver detalles
        </Button>
      </GridItem>
    </Box>
  );
};
