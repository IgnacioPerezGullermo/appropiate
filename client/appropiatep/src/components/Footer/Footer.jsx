import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Logo from '../../assets/AppBackgroundless.png';

export const Footer = ({ position }) => {
  const bgBanner = useColorModeValue('gray.200', 'gray.800');
  return (
    <>
      <Box
        bg={bgBanner}
        pos={'absolute'}
        w={'full'}
        h={'xs'}
        top={position}
        display={'flex'}
        flexDir={'column'}
        py={'1'}
      >
        <Box h={'40'} px={'28'} mb={4}>
          <Box bg={'transparent'} w={'16vw'} h={'8vh'}>
            <Image src={Logo} objectFit={'cover'} />
          </Box>
          <Text ml={'2'} mb={'2'} color={'primary'}>
            Suscríbete a nuestras noticias
          </Text>
          <InputGroup w={'xs'}>
            <Input
              border={'1px'}
              borderColor={'primary'}
              w={'xs'}
              rounded={'full'}
              placeholder="Correo electrónico"
            />
            <InputRightElement w={'24'} p={1}>
              <Button bg={'primary'} color={'white'} h={'99%'} rounded={'full'}>
                Suscribir
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
        <Box
          display={'flex'}
          flexDir={'row'}
          h={'24'}
          justifyContent={'space-around'}
          px={'16'}
        >
          <Box w={'xs'} display={'flex'} flexDir={'column'}>
            <Heading size={'md'} textAlign={'center'} color={'primary'} mb={4}>
              Horario de Atención
            </Heading>
            <Text textAlign={'center'}>Lunes a Viernes de</Text>
            <Text textAlign={'center'}>9:30 a 18:30 hrs.</Text>
          </Box>
          <Box w={'xs'} display={'flex'} flexDir={'column'}>
            <Heading size={'md'} textAlign={'center'} color={'primary'} mb={4}>
              Contacto
            </Heading>
            <Text textAlign={'center'}>Correo: info@appropiate.cl</Text>
            <Text textAlign={'center'}>Teléfono: +569 7289 4510</Text>
          </Box>
          <Box w={'xs'} display={'flex'} flexDir={'column'}>
            <Heading size={'md'} textAlign={'center'} color={'primary'} mb={4}>
              Dirección
            </Heading>
            <Text textAlign={'center'}>Calle Limache #1724, Oficina 710</Text>
            <Text textAlign={'center'}>
              Edificio contemporáneo Viña del Mar , Chile
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};
