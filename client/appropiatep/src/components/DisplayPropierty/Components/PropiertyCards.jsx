import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchedPropierties } from '../../../redux/properties/propertiesAction';
import { matchFilter } from '../../../utils/matchFilter';
import { Pagination } from '../../Pagination/Pagination';
import { PropiertyCard } from './PropiertyCard';

export const PropiertyCards = ({ salary }) => {
  const dispatch = useDispatch();
  const { propierties } = useSelector((state) => state.propierties);
  const [Page, setPage] = React.useState(0);
  const [PageSize, setPageSize] = React.useState(6);
  let count = 0;
  React.useEffect(() => {
    dispatch(
      getSearchedPropierties({
        page: Page,
        pageSize: PageSize,
        projectname: '',
      })
    );
  }, [Page, PageSize]);
  if (!salary) {
    return (
      <Box w={'90vw'} ml={'4vw'} mt={'14vh'} h={'container.md'} p={1}>
        <SimpleGrid columns={'3'} p={0} gap={6} ml={5}>
          {propierties?.data?.map((prop) => {
            return (
              <PropiertyCard
                key={prop.id}
                id={prop.id}
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
  } else {
    return (
      <Box w={'90vw'} ml={'4vw'} mt={'14vh'} h={'container.sm'} p={1}>
        <SimpleGrid columns={'3'} p={0} gap={6} ml={5}>
          {propierties?.data?.map((prop) => {
            if (
              matchFilter(
                salary || userInfo?.salary,
                30,
                35500,
                0.043,
                prop.price
              ) === true
            ) {
              return (
                <PropiertyCard
                  key={prop.id}
                  id={prop.id}
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
            }
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
  }
};
