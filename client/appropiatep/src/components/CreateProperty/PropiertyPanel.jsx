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
import  React  from 'react'
import { useDispatch } from 'react-redux';

export const PropiertyPanel = ({ setOption, Option }) => {
    const dispatch = useDispatch();
    /*const { propierty, createdPropierty, error, success } = useSelector(
      (state) => state.brokers
    );*/
    const [TabIndex, setTabIndex] = React.useState(0);
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
                _hover={{}}
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
                
              </TabPanel>
              
              <TabPanel>

              </TabPanel>
              <TabPanel>
                <p>Form de modificacion</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      );
};