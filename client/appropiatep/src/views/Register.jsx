import { Box, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input, List, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from '@chakra-ui/react';
import React from 'react';

export const Register = (
  
) => {
  return (
    <Box>
      <Heading>Completa tu registro</Heading>
      <List spacing={3}>
        <FormControl isRequired>
          <FormLabel> Renta líquida</FormLabel>
          <Input placeholder='$' />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Edad</FormLabel>
            <NumberInput max={99} min={18}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
        </FormControl>        
        <FormControl isRequired>
          <FormLabel> Ahorro actual</FormLabel>
          <Input placeholder='$' />
        </FormControl>
        <FormControl isRequired>
          <FormLabel> Crédito Hipotecario PRE-aprobado</FormLabel>
          <Input placeholder='$' />
          <FormHelperText>Escribe el monto</FormHelperText>
        </FormControl>
      </List>
    </Box>
  );
}; 
