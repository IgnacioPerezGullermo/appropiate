import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchedPropierties } from '../../../redux/properties/propertiesAction';
import { Pagination } from '../../Pagination/Pagination';
import { PropiertyCard } from './PropiertyCard';

export const PropiertyCards = ({}) => {
  const dispatch = useDispatch();
  const { propierties } = useSelector((state) => state.propierties);
  const [Page, setPage] = React.useState(0);
  const [PageSize, setPageSize] = React.useState(6);
  console.log(Page, PageSize);
  React.useEffect(() => {
    dispatch(
      getSearchedPropierties({
        page: Page,
        pageSize: PageSize,
        projectname: '',
      })
    );
  }, [Page, PageSize]);
  return (
    <Box w={'90vw'} ml={'4vw'} mt={'14vh'} h={'container.sm'} p={1}>
      <SimpleGrid columns={'3'} p={0} gap={6} mr={2}>
        {propierties?.data?.map((prop) => {
          return (
            <PropiertyCard
              bedr={prop.bedr}
              bath={prop.bath}
              price={prop.price}
              commune={prop.commune}
              region={prop.region}
              /*storage={prop.storage}
      parking={prop.parking}*/
              caprate={prop.caprate}
              //totalarea={prop.totalarea}
              //deliverytype={prop.deliverytype}
            />
          );
        })}
      </SimpleGrid>
      {propierties?.total > PageSize && (
        <Pagination
          page={Page}
          pageSize={PageSize}
          setPage={setPage}
          total={propierties?.total}
        />
      )}
    </Box>
  );
};
