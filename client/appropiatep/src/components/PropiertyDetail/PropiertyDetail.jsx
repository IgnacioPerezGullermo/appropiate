import {
  Box,
  Center,
  Divider,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import { UilPlus } from '@iconscout/react-unicons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPropiertyDetail } from '../../redux/properties/propertiesAction';
import { NavBar } from '../NavBar';

export const PropiertyDetail = ({ onOpen }) => {
  const params = useParams();
  const dispatch = useDispatch();
  const { propiertyDetail } = useSelector((state) => state.propierties);
  React.useEffect(() => {
    dispatch(getPropiertyDetail(params.id));
  }, [dispatch]);

  const bg = useColorModeValue('white', 'black');
  const color = useColorModeValue('black', 'white');
  console.log(propiertyDetail);
  return (
    <Box
      pos={'absolute'}
      top={'0vh'}
      left={'0%'}
      bg={bg}
      w={'100%'}
      borderRadius={'xl'}
      h={'container.xl'}
    >
      <NavBar onOpen={onOpen} />
      <Grid
        w={'90%'}
        h={'45%'}
        ml={'5%'}
        mt={'10%'}
        borderRadius={'xl'}
        display={'grid'}
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={3}
      >
        <GridItem rowSpan={2} colSpan={2}>
          <Image
            src={
              propiertyDetail?.images?.length > 0
                ? propiertyDetail?.images[0]?.url
                : null
            }
            objectFit={'contain'}
            h={'100%'}
            w={'100%'}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <Image
            src={
              propiertyDetail?.images?.length > 1
                ? propiertyDetail?.images[1]?.url
                : null
            }
            objectFit={'contain'}
            h={'100%'}
            w={'100%'}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <IconButton
            icon={<UilPlus size={'200px'} color={'#0000000'} />}
            w={'full'}
            h={'full'}
          />
        </GridItem>
      </Grid>
      <Text mt={5} fontSize={'2xl'} ml={'5%'} color={'primary'}>
        {propiertyDetail.region}, {propiertyDetail.commune}
      </Text>
      <Divider bg={'primary'} w mt={8} mb={8} />
      <Box>
        <TableContainer
          w={'80%'}
          ml={'10%'}
          border="1px"
          borderColor="primary"
          borderRadius={'xl'}
        >
          <Table
            variant="striped"
            size={'lg'}
            colorScheme={'teal'}
            borderColor={'white'}
          >
            <TableCaption placement={'top'} fontFamily={'body'} fontSize={'xl'}>
              Detalles del inmueble
            </TableCaption>
            <Tbody>
              <Tr>
                <Td>Habitaciones</Td>
                <Td textAlign={'right'}>{propiertyDetail?.bedr}</Td>
              </Tr>
              <Tr>
                <Td>Baños</Td>
                <Td isNumeric>{propiertyDetail?.bath}</Td>
              </Tr>
              <Tr>
                <Td>Estacionamiento</Td>
                <Td isNumeric>{propiertyDetail?.parking}</Td>
              </Tr>
              <Tr>
                <Td>Bodega</Td>
                <Td textAlign={'right'}>{propiertyDetail?.storage}</Td>
              </Tr>
              <Tr>
                <Td>Superficie</Td>
                <Td isNumeric>{propiertyDetail?.totalarea} mt2</Td>
              </Tr>
              <Tr>
                <Td>Cap rate</Td>
                <Td isNumeric>{propiertyDetail?.caprate}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
