import {
  Box,
  Button,
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
import { UilArrowLeft, UilFastMail, UilPlus } from '@iconscout/react-unicons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  clearPropiertyDetail,
  getPropiertyDetail,
} from '../../redux/properties/propertiesAction';
import { NavBar } from '../NavBar';
import { PropiertyForm } from './PropiertyForm';

export const PropiertyDetail = ({ onOpen }) => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { propiertyDetail } = useSelector((state) => state.propierties);
  const { userToken } = useSelector((state) => state.auth);
  React.useEffect(() => {
    dispatch(getPropiertyDetail(params.id));
  }, [dispatch]);
  console.log(userToken);
  const bg = useColorModeValue('white', 'black');
  const color = useColorModeValue('black', 'white');
  const handleGoBack = () => {
    dispatch(clearPropiertyDetail());
    navigate(-1);
  };
  return (
    <Box
      pos={'absolute'}
      top={'0vh'}
      left={'0%'}
      bg={bg}
      w={'100%'}
      borderRadius={'xl'}
      h={'auto'}
      pb={4}
    >
      <NavBar onOpen={onOpen} />
      <Button
        bg={'black'}
        border={'1px'}
        borderColor={'primary'}
        rounded={'full'}
        pos={'absolute'}
        top={'13vh'}
        left={'5%'}
        color={'white'}
        leftIcon={<UilArrowLeft />}
        onClick={handleGoBack}
      >
        Regresar
      </Button>
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
        <Box width={'full'} mt={8} mb={6}>
          {!userToken ? (
            <Center>
              <PropiertyForm />
            </Center>
          ) : (
            <Center>
              <Button h={10} leftIcon={<UilFastMail />}>
                Me interesa esta propiedad
              </Button>
            </Center>
          )}
        </Box>
      </Box>
    </Box>
  );
};
