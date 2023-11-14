import React, { useState } from 'react';
import Loader from '../components/loader';
import Header from '../components/header';
import vid from '../assets/vid2.mp4';
import Bus from '../assets/bus.png';
import tirangles from '../assets/triangles.png';

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Img,
  Spacer,
  Stack,
  Stat,
  Text,
  keyframes,
} from '@chakra-ui/react';
import {
  FaGoogle,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import Stats from '../components/stats';

import OurTeam from '../components/ourteam';
import Map from '../components/test';
import Footer from '../components/footer';
import { bounce, bounceIn, shake, swing } from 'react-animations';
import styled from '@emotion/styled';
import BusOg from '../components/bus';
import Safety from '../components/safety';
import Testamonials from '../components/testamonials';

import ScrollAnim from '../components/scroll-anim';

import Cards from '../components/cards';
import Instareels from '../components/Instareels';
function Home() {
  const [Loading, setLoading] = useState(true);
  const bounceAnimation = keyframes`${swing}`;
  const shakeAnim = keyframes`${shake}`;
  const Shake = styled.div`
    &:hover {
      animation: 1s ${shakeAnim};
    }
  `;
  const BouncyDiv = styled.div`
    animation: 8s ${bounceAnimation} infinite;
  `;
  const Rotate = styled.div`
    transition: 300ms linear;
    &:hover {
      pointer: cursor;
      transform: skew(3deg, 5deg);
    }
  `;

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return Loading ? (
    <Loader />
  ) : (
    <>
      <Stack spacing={4}>
        <Stack
          position="fixed"
          top="20%"
          right="10px"
          spacing="8px"
          display={{ base: 'none', md: 'flex' }}
        >
          <IconButton icon={<FaGoogle />} />
          <IconButton icon={<FaYoutube />} />
          <IconButton icon={<FaPinterest />} />
          <IconButton icon={<FaInstagram />} />
          <IconButton icon={<FaTwitter />} />
        </Stack>

        <Header />
        <Spacer height={{ base: '20px', md: '80px' }} />

        <video loop muted autoPlay src={vid} width="100%" />

        <Cards />

        {/* <Stats /> */}
        {/* <Insta /> */}
        {/* <OurTeam /> */}
        {/* <Spacer h='50px'></Spacer> */}

        {/* <ScrollAnim/> */}
        <Safety />
        <Map />
        <Testamonials />
        <Instareels />
      </Stack>
      <Footer />
    </>
  );
}

export default Home;

// <Stack h='100%' >
// <Box w='100%' h='80px' backgroundColor='red'>
//     {/* triangles */}
//     <Img h='110px' w='100%' src={tirangles} />
// </Box>
// <Spacer h='100px'></Spacer>
// <Flex h='100%' direction='column' alignItems='center'>

//     <Stack alignItems='center'>
//         <Rotate>
//             <Text fontSize='48px' fontWeight='bold'>All About Food Bus Of India</Text>
//         </Rotate>
//         <Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             Varius sed pharetra dictum neque massa congue</Text>
//     </Stack>
//     <HStack margin='0px 40px' h='100%' >
//         {/* Left Menu */}
//         <Stack>
//             <Stack>

//                 <Shake>

//                     <Text fontSize='30px' fontWeight='bold'>Cappuccino</Text>

//                 </Shake>

//                 <Text fontSize='16px' color='#4F4F4F' > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi.</Text>
//             </Stack>
//             <Stack>
//                 <Shake>
//                     <Text fontSize='30px' fontWeight='bold'>Cappuccino</Text>
//                 </Shake>
//                 <Text fontSize='16px' color='#4F4F4F' > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi.</Text>
//             </Stack>
//             <Stack>
//                 <Shake>
//                     <Text fontSize='30px' fontWeight='bold'>Cappuccino</Text>
//                 </Shake>
//                 <Text fontSize='16px' color='#4F4F4F' > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi.</Text>
//             </Stack>
//         </Stack>
//         {/* Left Menu end */}
//         <BouncyDiv>

//             <Img w='400px' margin='0px 20px' src={Bus}></Img></BouncyDiv>

//         {/* Right Menu Start */}
//         <Stack>
//             <Stack alignItems='end' >
//                 <Shake>
//                     <Text fontSize='30px' fontWeight='bold'>Cappuccino</Text>
//                 </Shake>
//                 <Text fontSize='16px' textAlign='end' color='#4F4F4F' > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi.</Text>
//             </Stack>
//             <Stack alignItems='end' >
//                 <Shake>
//                     <Text fontSize='30px' fontWeight='bold'>Cappuccino</Text>
//                 </Shake>
//                 <Text fontSize='16px' textAlign='end' color='#4F4F4F' > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi.</Text>
//             </Stack>
//             <Stack alignItems='end' >
//                 <Shake>
//                     <Text fontSize='30px' fontWeight='bold'>Cappuccino</Text>
//                 </Shake>
//                 <Text fontSize='16px' textAlign='end' color='#4F4F4F' > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi.</Text>
//             </Stack>
//         </Stack>

//         {/* Right Menu End */}

//     </HStack>
// </Flex>
// </Stack >
