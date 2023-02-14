import {
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

export const PropiertyCard = ({
  bedr,
  bath,
  price,
  commune,
  region,
  storage,
  parking,
  caprate,
}) => {
  return (
    <Card
      width={'28vw'}
      h={'30vh'}
      borderRadius={'lg'}
      boxShadow={'base'}
      m={3}
      bg={'#272727'}
      gridTemplateAreas={`"image info"`}
      gridTemplateColumns={'0.9fr 1fr'}
      gridTemplateRows={'1fr'}
      display={'grid'}
      overflow={'hidden'}
    >
      {' '}
      <GridItem area={'image'}>
        <Image
          objectFit="cover"
          //maxW={{ base: '75%', sm: '100px' }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-xaIPATS-Hup0_r3HzAe5KIkUX7hXfARENw&usqp=CAU"
          alt="Caffe Latte"
          h={'100%'}
          //gridArea={"image"}
        />
      </GridItem>
      <GridItem area={'info'} color={'#19C8C4'}>
        <CardHeader>
          <HStack justifyContent="space-evenly">
            <Box display={'flex'} flexDirection={'row'}>
              <Heading fontSize={'2xl'}>{commune},</Heading>
            </Box>
            <Box display={'flex'} flexDirection={'row'}>
              <Text fontSize={'xl'} color={'#FFFFFF'}>
                {region}
              </Text>
            </Box>
          </HStack>
        </CardHeader>
        <Divider />
        <CardBody>
          <HStack justifyContent="space-evenly">
            <Box display={'flex'} flexDirection={'row'}>
              <UilBed />
              <Text ml={1} color={'#FFFFFF'}>
                {' '}
                {bedr}{' '}
              </Text>
            </Box>
            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent="space-around"
            >
              <UilBath />
              <Text ml={1} color={'#FFFFFF'}>
                {' '}
                {bath}{' '}
              </Text>
            </Box>
            <Box display={'flex'} flexDirection={'row'}>
              <UilBox />
              <Text>{storage}</Text>
            </Box>
            <Box display={'flex'} flexDirection={'row'}>
              <UilCar />
              <Text>{parking}</Text>
            </Box>
          </HStack>
        </CardBody>
        <Divider />
        <CardFooter>
          <HStack justifyContent="space-evenly" w="100%">
            <VStack
              fontSize={'2xl'}
              alignItems={'center'}
              color={'#FFFFFF'}
              justifyContent="space-evenly"
            >
              <Text fontSize={'xs'}>Cap Rate</Text>
              <Box
                display={'flex'}
                flexDirection={'row'}
                justifyContent="space-around"
              >
                <Text>{caprate}</Text>
                <UilPercentage />
              </Box>
            </VStack>
            <VStack alignItems={'center'} justifyContent="space-evenly">
              <Text fontSize={'xs'} color={'#FFFFFF'}>
                Desde
              </Text>
              <Box display={'flex'} flexDirection={'row'}>
                <Text fontSize={'2xl'}>{price} UF</Text>
              </Box>
            </VStack>
          </HStack>
        </CardFooter>
        <Center>
          <Button
            bg={'#19C8C4'}
            color={'#FFFFFF'}
            justifyContent="space-evenly"
            alignItems={'center'}
          >
            {' '}
            + información
          </Button>
        </Center>
      </GridItem>
    </Card>
  );
};
