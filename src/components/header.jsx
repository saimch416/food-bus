import React from 'react';
import logo from '../assets/logo.png';
import bus from '../assets/bus.png';
import {
  Box,
  Img,
  Text,
  Link,
  Heading,
  Flex,
  IconButton,
  HStack,
  Collapse,
  keyframes,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import styled from '@emotion/styled';

import { pulse } from 'react-animations';
function Header() {
  const { isOpen, onToggle } = useDisclosure();
  const [showLinks, setShowLinks] = useState(false);
  const Moving = keyframes`
    0% {left:0%;}
    
    100% {left:90%;}

    // 30% { height: 400px; width: 400px; opacity: 1 }
    // 40% { height: 405px; width: 405px; opacity: 0.3; }
    // 100% { left :0px }
   `;
  const MovingBus = styled.div`
    position: fixed;
    left: 90%;
    animation-name: ${Moving};
    animation-timing-function: linear;
    animation-duration: 5s;
    // animation-iteration-count: infinite;
  `;

  const LogoAnim = keyframes`
   0% {opacity:0}
   50% {opacity:0}
   100% {opacity:1}
  `;
  // const bounceAnimation = keyframes`${pulse}`;
  const BouncyDiv = styled.div`
    position: fixed;
    top: 20px;
    left: 20px;
    animation-name: ${LogoAnim};

    animation-timing-function: linear;
    animation-duration: 2s;
    // animation-iteration-count: infinite;
  `;
  return (
    <Box
      bg="#141D74"
      borderBottom="2px solid white"
      zIndex="9999999999"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      color="white"
      h="80px"
      w="100%"
      position="fixed"
      paddingX="20px"
      flexDirection={{ base: 'column', md: 'row' }}
    >
      <Flex
        display={{ base: 'flex', md: 'none' }}
        alignItems="center"
        onClick={() => setShowLinks(!showLinks)}
        cursor="pointer"
      >
        {showLinks ? <CloseIcon /> : <HamburgerIcon />}
      </Flex>

      <BouncyDiv>
        <Img
          h={{ base: '80px', md: '120px' }}
          src={logo}
          transform="rotate(-16deg)"
        ></Img>
      </BouncyDiv>

      <HStack
        spacing="30px"
        display={{ base: showLinks ? 'flex' : 'none', md: 'flex' }}
        flexDir={{ base: 'column', md: 'row' }}
        width="100%"
        textAlign="center"
        justifyContent="center"
      >
        <Link href="/">
          <Heading fontSize="18px">Home</Heading>
        </Link>
        <Link href="/story">
          <Heading fontSize="18px">Our story</Heading>
        </Link>
        <Link href="/menu">
          <Heading fontSize="18px">Menu</Heading>
        </Link>
        <Link href="/franchise">
          <Heading fontSize="18px">Franchise</Heading>
        </Link>
        <Link href="/about">
          <Heading fontSize="18px">About Us</Heading>
        </Link>
        {/* Other Links with Headings */}
      </HStack>

      <MovingBus>
        <Img h="80px" src={bus}></Img>
      </MovingBus>
    </Box>
  );
}
export default Header;
