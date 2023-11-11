import {
  Box,
  Button,
  Flex,
  HStack,
  Img,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import logo from '../assets/logov.png';

function Footer() {
  return (
    <>
      <Stack
        bg="#1B257E"
        w="100%"
        padding={{ base: '50px 20px', md: '120px 200px' }}
      >
        <HStack
          borderBottom="1px solid #FF9F0D"
          w="100%"
          h={{ base: 'auto', md: '200px' }}
          color="white"
          justifyContent="space-between"
          alignContent="start"
          flexDir={{ base: 'column', md: 'row' }}
        >
          <Stack mb={{ base: '20px', md: '0' }}>
            <Text fontSize={{ base: '24px', md: '32px' }} fontWeight="bold">
              <span style={{ color: '#EF3A3A' }}>St</span>ill You Need Our
              Support ?
            </Text>
            <Text>
              Don’t wait make a smart & logical quote here. It's pretty easy.
            </Text>
          </Stack>
          {/* Input */}
          <InputGroup w={{ base: '100%', md: '300px' }} h="80px">
            <Input
              color="white"
              background="#EF3A3A"
              pr="4.5rem"
              type="text"
              placeholder="Enter Your Email"
              border="none"
            />
            <InputRightElement width="7rem">
              <Button color="#EF3A3A">Subscribe Now</Button>
            </InputRightElement>
          </InputGroup>
        </HStack>
        <Stack h="100%" w="100%" marginTop={{ base: '20px', md: '0' }}>
          <HStack
            justifyContent="space-evenly"
            color="white"
            alignContent="start"
            alignItems="start"
            flexWrap="wrap"
          >
            <Flex
              h="100%"
              direction="column"
              justifyContent="center"
              alignItems="center"
              mb={{ base: '20px', md: '0' }}
            >
              <Img src={logo} alt="Logo" />
            </Flex>
            <Stack mb={{ base: '20px', md: '0' }}>
              <Text fontSize={{ base: '18px', md: '20px' }} fontWeight="700">
                About Us.
              </Text>
              <Text fontSize="16px" w={{ base: '100%', md: '300px' }}>
                Corporate clients and leisure travelers have been relying on
                Groundlink for dependable, safe, and professional chauffeured
                car service in major cities across the world.
              </Text>
            </Stack>
            <Stack mb={{ base: '20px', md: '0' }}>
              <Text
                fontSize={{ base: '18px', md: '20px' }}
                fontWeight="700"
                w="150px"
              >
                Useful Links
              </Text>
              <Text fontSize="16px">About</Text>
              <Text fontSize="16px">News</Text>
              <Text fontSize="16px">Partners</Text>
              <Text fontSize="16px">Team</Text>
              <Text fontSize="16px">Menu</Text>
              <Text fontSize="16px">Contact</Text>
            </Stack>
            <Stack mb={{ base: '20px', md: '0' }}>
              <Text
                fontSize={{ base: '18px', md: '20px' }}
                fontWeight="700"
                w="150px"
              >
                Help?
              </Text>
              <Text fontSize="16px">Faq</Text>
              <Text fontSize="16px">Term & Condition</Text>
              <Text fontSize="16px">Reporting</Text>
              <Text fontSize="16px">Documentation</Text>
              <Text fontSize="16px">Support Policy</Text>
              <Text fontSize="16px">Privacy</Text>
            </Stack>
          </HStack>
        </Stack>
      </Stack>
      <Box bg="#EF3A3A" padding="10px 20px" w="100%" color="white">
        <Text fontSize="14px">Copyright © 2023. All Rights Reserved.</Text>
      </Box>
    </>
  );
}

export default Footer;
