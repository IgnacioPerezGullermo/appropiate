import { Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Divider, grid, GridItem, Heading, HStack, Image, Text, Tooltip, VStack } from '@chakra-ui/react';
import { UilBath, UilBed, UilBox, UilCar, UilFastMail, UilPercentage } from '@iconscout/react-unicons';
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
  console.log(storage || storage === 'si')
    return (
        <Card
          width={'28vw'}
          h={'30vh'}
          borderRadius={'lg'}
          boxShadow={'base'}
          m={3}
          bg={'#272727'}
          gridTemplateAreas={`"image info"`}
          gridTemplateColumns={"0.9fr 1fr"}
          gridTemplateRows={"1fr"}
          display={"grid"}
          overflow={"hidden"}> 
          <GridItem
            area={"image"}>
            <Image
              objectFit='cover'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-xaIPATS-Hup0_r3HzAe5KIkUX7hXfARENw&usqp=CAU'
              alt='edificio'
              h={'100%'}
            />
          </GridItem>
          <GridItem
            area={"info"}
            color={'primary'}>
            <CardHeader >
              <HStack justifyContent='space-evenly'
                      alignItems={"center"}>
                <Box display={"flex"} flexDirection={"row"}>
                  <Text fontSize={"xl"} color={'white'}>{commune},</Text>
                </Box>
                <Box display={"flex"} flexDirection={"row"}>
                  <Text fontSize={"xl"} >{region}</Text>
                </Box>
              </HStack>
            </CardHeader>
            <Divider/>
            <CardBody>
              <HStack 
                justifyContent='space-evenly'>
                <Box 
                  display={"flex"} 
                  flexDirection={"row"}>
                  <Tooltip label='Dormitorios' fontSize='md' placement='bottom'>
                    <span>  <UilBed/> </span>
                  </Tooltip>
                  <Text ml={1} color={'white'}> {bedr} </Text>
                </Box>
                <Box 
                  display={"flex"} 
                  flexDirection={"row"}
                  justifyContent='space-around'>
                  <Tooltip label='Baños' fontSize='md' placement='bottom'>
                    <span>  <UilBath/>  </span>
                  </Tooltip>
                  <Text ml={1} color={'white'}> {bath} </Text>
                </Box>
                {(storage && storage === 'si') && 
                //aca viene el jsx
                <Box 
                  display={"flex"} 
                  flexDirection={"row"}>
                  <Tooltip label='Bodega' fontSize='md' placement='bottom'>
                    <span>  <UilBox/>  </span>
                  </Tooltip> 
                </Box>}
                {(parking && parking !== 'no') && 
                //aca viene el jsx
                <Box 
                  display={"flex"} 
                  flexDirection={"row"}>
                  <Tooltip label='Estacionamiento' fontSize='md' placement='bottom'>
                    <span>  <UilCar/>  </span>
                  </Tooltip>                 
                </Box>}
              </HStack>
            </CardBody>
            <Divider/>
            <CardFooter >
              <HStack 
                justifyContent='space-evenly'
                w="100%">
                <VStack
                  fontSize={"2xl"}              
                  alignItems={"center"}
                  color={'white'}
                  justifyContent='space-evenly'>
                  <Text fontSize={"xs"}>Cap Rate</Text>
                  <Box
                    display={"flex"} 
                    flexDirection={"row"}
                    justifyContent='space-evenly'
                    alignItems={"center"}>
                    <Text>{caprate}</Text>
                    <UilPercentage/>
                  </Box>
                </VStack>
                <VStack  
                  alignItems={"center"} 
                  justifyContent='space-evenly'>
                  <Text fontSize={"xs"} color={'white'}>Desde</Text>
                  <Box
                    display={"flex"}
                    flexDirection={"row"}>
                    <Text fontSize={"2xl"}>{price} UF</Text>
                  </Box>
                </VStack>
              </HStack>
            </CardFooter>
            <Center>
              <Button
                rightIcon={<UilFastMail/>} 
                bg={'primary'}
                color={'white'} 
                justifyContent='space-evenly' 
                alignItems={"center"}> + información</Button>
            </Center>
          </GridItem>
        </Card> 
      );
    };