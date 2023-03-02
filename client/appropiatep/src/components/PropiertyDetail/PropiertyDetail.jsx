import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPropiertyDetail } from '../../redux/properties/propertiesAction';

export const PropiertyDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { propiertyDetail } = useSelector((state) => state.propierties);
  React.useEffect(() => {
    dispatch(getPropiertyDetail(params.id));
  }, [dispatch]);
  console.log(propiertyDetail);
  return (
    <Box pos={'absolute'} top={'20vh'}>
      <Text>PropiertyDetail {params.id}</Text>
    </Box>
  );
};
