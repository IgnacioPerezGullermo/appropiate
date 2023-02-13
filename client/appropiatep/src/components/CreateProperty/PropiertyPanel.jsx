import {
  Avatar,
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Select,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchedPropierties } from '../../redux/properties/propertiesAction';
import { CreateProperty } from './Components/CreateProperty';
import { PropiertyList } from './Components/PropiertyList';

export const PropiertyPanel = ({ setOption, Option }) => {
  const dispatch = useDispatch();
  const { propierties, createdPropierty, error, success } = useSelector(
    (state) => state.propierties
  );
  const [TabIndex, setTabIndex] = React.useState(0);
  const [Searched, setSearched] = React.useState('');
  const [Page, setPage] = React.useState(0);
  const [PageSize, setPageSize] = React.useState(4);
  React.useEffect(() => {
    dispatch(
      getSearchedPropierties({
        page: Page,
        pageSize: PageSize,
        projectname: Searched,
      })
    );
  }, [TabIndex, Searched, Page]);

  const handleTabChange = (index) => {
    setTabIndex(index);
  };

  return (
    <Box
      bg={'whiteAlpha.800'}
      h={'92vh'}
      w={'75vw'}
      pos={'absolute'}
      left={'20%'}
      borderRadius={'15px'}
      ml={'2.5vw'}
      mt={'4vh'}
    >
      <Tabs
        index={TabIndex}
        onChange={handleTabChange}
        isFitted
        variant="enclosed-colored"
      >
        <TabList>
          <Tab
            bg={'whiteAlpha.900'}
            color={'black'}
            borderBottom={'1px solid gray'}
            borderRadius={'15px 0% 0% 0%'}
            _selected={{ color: 'white', bg: 'blue.600' }}
          >
            Propiedades Overview
          </Tab>
          <Tab
            bg={'whiteAlpha.900'}
            color={'black'}
            borderBottom={'1px solid gray'}
            _selected={{ color: 'white', bg: 'blue.600' }}
          >
            Crear Propiedad
          </Tab>
          <Tab
            bg={'whiteAlpha.900'}
            color={'black'}
            borderBottom={'1px solid gray'}
            _selected={{ color: 'white', bg: 'blue.600' }}
            borderRadius={'0% 15px 0% 0%'}
          >
            Modificar Propiedad
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <PropiertyList
              propierties={propierties}
              setSearched={setSearched}
              Page={Page}
              setPage={setPage}
              PageSize={PageSize}
            />
          </TabPanel>
          <TabPanel>
            <CreateProperty />
          </TabPanel>
          <TabPanel>
            <p>Form de modificacion</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
