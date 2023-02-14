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
  Tooltip,
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
  console.log(storage || storage === 'si');
  return (
    <Card
      width={'100%'}
      h={'38vh'}
      borderRadius={'lg'}
      boxShadow={'base'}
      bg={'black'}
      gridTemplateAreas={`"image info"`}
      gridTemplateColumns={'35% 65%'}
      gridTemplateRows={'1fr'}
      display={'grid'}
      overflow={'hidden'}
    >
      <GridItem area={'image'}>
        <Image
          objectFit="cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-xaIPATS-Hup0_r3HzAe5KIkUX7hXfARENw&usqp=CAU"
          alt="edificio"
          h={'100%'}
        />
      </GridItem>
      <GridItem area={'info'} color={'primary'}>
        <CardHeader>
          <HStack w={'100%'} justify={'left'}>
            <Text fontSize={'xl'} fontWeight={'bold'} justifySelf={'left'}>
              {commune},{' '}
            </Text>
            <Text fontSize="xl" color={'white'} fontWeight={'light'}>
              {' '}
              {region}
            </Text>
          </HStack>
        </CardHeader>
        <Divider />
        <CardBody>
          <HStack justifyContent="space-evenly">
            <Box display={'flex'} flexDirection={'row'}>
              <Tooltip label="Dormitorios" fontSize="md" placement="bottom">
                <span>
                  {' '}
                  <UilBed />{' '}
                </span>
              </Tooltip>
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
              <Tooltip label="Baños" fontSize="md" placement="bottom">
                <span>
                  {' '}
                  <UilBath />{' '}
                </span>
              </Tooltip>
              <Text ml={1} color={'#FFFFFF'}>
                {' '}
                {bath}{' '}
              </Text>
            </Box>
            {storage && storage === 'si' && (
              //aca viene el jsx
              <Box display={'flex'} flexDirection={'row'}>
                <Tooltip label="Bodega" fontSize="md" placement="bottom">
                  <span>
                    {' '}
                    <UilBox />{' '}
                  </span>
                </Tooltip>
              </Box>
            )}
            {parking && parking !== 'no' && (
              //aca viene el jsx
              <Box display={'flex'} flexDirection={'row'}>
                <Tooltip
                  label="Estacionamiento"
                  fontSize="md"
                  placement="bottom"
                >
                  <span>
                    {' '}
                    <UilCar />{' '}
                  </span>
                </Tooltip>
              </Box>
            )}
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
                justifyContent="space-evenly"
                alignItems={'center'}
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
            rightIcon={<UilFastMail />}
            variant={'outline'}
            //bg={'#19C8C4'}
            color={'white'}
            justifyContent="space-evenly"
            borderColor={'primary'}
            alignItems={'center'}
            borderRadius={'full'}
            _hover={{ bg: 'primary' }}
          >
            {' '}
            + información
          </Button>
        </Center>
      </GridItem>
    </Card>
  );
};
