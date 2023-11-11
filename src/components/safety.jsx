import { Box, Flex, Img, Stack, Text } from '@chakra-ui/react';
import hat from '../assets/hat.png';
import dil from '../assets/dil.png';
import testi from '../assets/testi.jpeg';

function Safety() {
  return (
    <Stack
      padding={['20px', '20px', '20px', '20px 15vw']}
      spacing={['20px', '20px', '20px', '0']}
    >
      <Flex
        direction={['column', 'column', 'column', 'row']}
        justifyContent="space-between"
        alignItems={['center', 'center', 'center', 'center']}
      >
        <Text
          paddingLeft={['0', '0', '0', '40px']}
          fontSize={['2rem', '2rem', '2rem', '3.5rem']}
          color="#CE2727"
          fontFamily="inter"
          fontWeight="700"
        >
          WE PRIORITIZE
          <br />
          YOUR SAFETY
          <br />
          ABOVE ALL ELSE
        </Text>
        <Box bg="#000" w={['100%', '100%', '100%', '300px']} h="400px">
          <Img src={testi} alt="" h="100%" w="100%" objectFit="cover" />
        </Box>
      </Flex>
      <Flex
        direction={['column', 'column', 'row']}
        justifyContent={['space-around', 'space-around', 'space-between']}
        paddingTop={['40px', '40px', '80px']}
      >
        <SafetyItem bgColor="#EF3A3A" textColor="#FFF" />
        <SafetyItem bgColor="#202B8C" textColor="#FFF" />
        <SafetyItem bgColor="#EF3A3A" textColor="#FFF" />
      </Flex>
    </Stack>
  );
}

function SafetyItem({ bgColor, textColor }) {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      bg={bgColor}
      w={['100%', '100%', '300px']}
      h="300px"
      borderRadius="full"
    >
      <Img h="100px" w="100px" src={hat} alt="" />
      <Text fontSize="26px" color={textColor}>
        Professional Chefs
      </Text>
      <Text fontWeight="700" fontSize="40px" color={textColor}>
        420
      </Text>
    </Stack>
  );
}

export default Safety;
