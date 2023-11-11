import { HStack, Stack, Text } from '@chakra-ui/react';
import React from 'react';

function Cards() {
  return (
    <HStack
      justifyContent="center"
      flexWrap="wrap"
      spacing={{ base: '8', md: '10', lg: '12' }}
      paddingTop={{ base: '16px', md: '24px' }}
    >
      <Stack
        padding={{ base: '20px', md: '50px' }}
        width={{ base: '100%', md: '400px' }}
        borderRadius="15px"
        border="1px Solid #2B0AF5"
        marginBottom={{ base: '16px', md: '0' }}
      >
        <Text
          fontSize={{ base: '18px', md: '22px' }}
          fontWeight="800"
          textAlign="center"
        >
          Taste It!
          <br />
          Taste It!
          <br />
          Taste It!
        </Text>
        <br />
        <br />
        <Text fontSize={{ base: '16px', md: '18px' }} textAlign="center">
          Food is symbolic of love when words are inadequate... (Your text here)
        </Text>
      </Stack>

      <Stack
        bg="#202B8C"
        color="white"
        padding={{ base: '20px', md: '50px' }}
        width={{ base: '100%', md: '400px' }}
        borderRadius="15px"
        border="1px Solid #2B0AF5"
        marginBottom={{ base: '16px', md: '0' }}
      >
        <Text
          fontSize={{ base: '18px', md: '22px' }}
          fontWeight="800"
          textAlign="center"
        >
          Taste It!
          <br />
          Taste It!
          <br />
          Taste It!
        </Text>
        <br />
        <br />
        <Text fontSize={{ base: '16px', md: '18px' }} textAlign="center">
          Food is symbolic of love when words are inadequate... (Your text here)
        </Text>
      </Stack>

      <Stack
        padding={{ base: '20px', md: '50px' }}
        width={{ base: '100%', md: '400px' }}
        borderRadius="15px"
        border="1px Solid #2B0AF5"
      >
        <Text
          fontSize={{ base: '18px', md: '22px' }}
          fontWeight="800"
          textAlign="center"
        >
          Taste It!
          <br />
          Taste It!
          <br />
          Taste It!
        </Text>
        <br />
        <br />
        <Text fontSize={{ base: '16px', md: '18px' }} textAlign="center">
          Food is symbolic of love when words are inadequate... (Your text here)
        </Text>
      </Stack>
    </HStack>
  );
}

export default Cards;
