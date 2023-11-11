import React from 'react';
import styled from 'styled-components';
import bg from '../assets/busog.png';
import { Box, Text, Spacer } from '@chakra-ui/react';
import Header from '../components/header';
import Footer from '../components/footer';

function Story() {
  const BG = styled.div`
    margin-top: 0px;
    padding: '0px 20vw';
    background-image: url(${bg});
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
  `;
  const AnimatedBox = styled(Box)`
    opacity: 0;
    animation: fadeIn 2s ease-out forwards;

    @keyframes fadeIn {
      to {
        opacity: 1;
      }
    }
  `;

  return (
    <>
      <Header />
      <Spacer height={{ base: '120px', md: '100px' }} />
      <BG>
        <AnimatedBox
          w={{ base: '100%', md: '100vw', lg: '100vw' }}
          padding={{ base: '20px', md: '50px', lg: '80px' }}
          display="flex"
          margin-top="300px"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            w="100%"
            minH="500px"
            bg="rgba(0, 0, 0, 0.6)"
            textAlign="center"
            padding="20px"
            marginTop="50px"
          >
            <Text
              color="#DB2B2B"
              fontSize={{ base: '30px', md: '40px', lg: '50px' }}
              fontWeight="700"
            >
              Our Story
            </Text>
            <br />
            <Text
              color="white"
              textAlign="justify"
              display="flex"
              justifyContent="center"
              lineHeight={{ base: '1.5', md: '2', lg: '2.5' }}
              fontSize={{ base: '16px', md: '20px', lg: '24px' }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              accusamus at, velit incidunt voluptatem maiores ea quos iste illo,
              facilis sapiente blanditiis ipsa pariatur voluptatum amet eos?
              Fugit, quasi distinctio. Quod consectetur amet vero, dolorem
              eveniet nesciunt cumque eum omnis reiciendis iusto illum dolor
              numquam mollitia. Repudiandae tempora accusantium non vel unde
              aliquid magnam similique iure minus harum, nisi inventore. Quasi
              dolorum facilis ab ipsum. Velit quo id maiores facere eaque, earum
              dolorem esse, totam, dicta nesciunt placeat eum possimus accusamus
              sunt iste harum sint? Nemo recusandae consequuntur quasi
              assumenda?
            </Text>
          </Box>
        </AnimatedBox>
      </BG>
      <Spacer height={{ base: '40px', md: '20px' }} />
      <Footer />
    </>
  );
}

export default Story;
