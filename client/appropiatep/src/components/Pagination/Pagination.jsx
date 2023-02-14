import { Box, Button } from '@chakra-ui/react';
import React from 'react';

export const Pagination = ({ page, pageSize, total, setPage }) => {
  let totalPages = Math.ceil(total / pageSize);
  let pagesObject = [];
  for (let step = 0; step < totalPages; step++) {
    pagesObject.push({ value: step });
  }
  console.log(pagesObject);
  return (
    <Box
      mt={'2vh'}
      paddingInline={'0.7vw'}
      paddingBlock={'0.5vh'}
      borderRadius={'2xl'}
      bg={'transparent'}
    >
      {pagesObject.map((page) => {
        return (
          <Button
            bg={'teal.300'}
            value={page.value}
            color={'black'}
            size={'md'}
            borderRadius={'3xl'}
            marginInline={'0.5vw'}
            _hover={{ bg: 'teal.600', color: 'white' }}
            onClick={() => {
              setPage(page.value);
            }}
          >
            {page.value + 1}
          </Button>
        );
      })}
    </Box>
  );
};
