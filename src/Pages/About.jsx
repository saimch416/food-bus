import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Box, HStack, Img, Spacer, Stack, Text } from '@chakra-ui/react';
import logo from '../assets/logoabot.jpg';
import aboutimg from '../assets/aboutimg.jpg';
import inmedia from '../assets/inmedia.jpg';
import bg from '../assets/aboutbg.png';
import styled from 'styled-components';

function About() {
  const BG = styled.div`
    margin-top: 20px;
    background-image: url(${bg});
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
    //
  `;
  const RED = styled.span`
    color: #b21616;
  `;

  const HoverableText = styled.div`
    background: #eb1717;
    color: #fff;
    font-size: 33px;
    font-weight: 400;
    text-align: center;
    font-weight: bold;
    padding: 10px; /* Adding padding for better touch/click interaction */

    &:hover {
      background-color: #ff0000;
      color: #000;
      cursor: pointer;
    }

    @media (max-width: 768px) {
      margin-top: 50px;
      margin-left: 10px;
      margin-right: 10px;
      margin-bottom: 10px;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
      margin-left: 100px;
      margin-right: 100px;
      margin-bottom: 20px;
    }

    @media (min-width: 1025px) {
      margin-left: 320px;
      margin-right: 320px;
      margin-bottom: 22px;
    }
  `;
  const AnimatedText = styled.div`
    text-align: center;
    color: #f3f4fe;
    fontSize=24px;
            
    margin: 0px 22px;
    margin-top: 0px;
    opacity: 1; /* Start with opacity 0 */
    transform: translateY(
      20px
    ); /* Start with a slight translateY transformation */

    animation: fadeInUp 1s ease-out forwards; /* Animation name, duration, timing function, and fill mode */

    @keyframes fadeInUp {
      to {
        opacity: 1; /* End with opacity 1 */
        transform: translateY(0); /* End with translateY 0 */
      }
    }
  `;
  return (
    <>
      <Header />
      <Spacer height={{ base: '40px', md: '20px' }} />

      <BG>
        <Box
          padding={['10px', '10vw']}
          margin={['5px', '5vw']}
          bg="rgba(15, 14, 14, 0.8)"
        >
          <HoverableText>Outline About FBI</HoverableText>

          <AnimatedText>
            As you know the hospitality sector is already an exhaustive sector,
            coming up with the label “<RED>First time</RED>” in India is itself
            an achievement which I believe is going to disrupt India’s F&B
            sector. Food Bus of India (FBI) is one of its kind models which
            tends to overcome all the “<RED>cons</RED>” of hospitality sectors.
            <br />
            Expansion:
            <br />
            Food Bus of India has been regarded as an “
            <RED>Ultra- Scalable</RED>” model, as we can literally launch it
            anywhere, which can be seen given the current scenario, we have
            already marked our presence in literally every prominent corner of
            Delhi. Unlike any other player, our brand doesn’t require civil
            structure. Hence, given this unique feature, we have an exclusive
            tie up with the DMRC. The firm has taken the 7 top notch metro
            stations for its first phase launch.
            <br />
            The brand currently has 4 outlets at Rajendra Place, North Campus,
            Lajpat Nagar, South Ex followed by (soon to be open) Malviya Nagar,
            Green park, Dwarka.
            <br />
            Due to our unique model, the firm has gotten the proposal from
            Universities, Hospitals, Malls, Realtors for second phase launch.
            Simultaneously, we are also in talks to expand to other states as
            well, Chandigarh and Gujarat to be specific.
            <br />
            Economies of Scale:
            <br />
            Our capital expenditure is approx. 95% same across all outlets and
            our working capital expenditure (including salaries) is 99%. Hence,
            this means our projection for any new outlet is 90% accurate. As a
            result, the firm is getting excellent traction from franchise
            investors.
            <br />
            Moreover, to ensure standardization, hygiene, controlled wastage and
            food cost our 6000 sq ft centralized fully equipped base kitchen is
            being operated continuously by our chefs and technologists.
            <br />
            Beating the traditional F&B norms:
            <br />
            Due to the brand aesthetics and its strategic placement, each outlet
            enjoys the “<RED>negative rentals</RED>” in other words, due to the
            space available for advertisement/ billboards at the outlet plus the
            high footfall location, one can get additional source of fixed
            revenue for the same.
            <br />
            Secondly, the brand is characterized by no capex loss. To explain,
            if any outlet doesn’t perform up to the company's benchmark, our
            logistic team will simply tow the outlet to its new location. Hence,
            zero capital loss.
          </AnimatedText>
        </Box>
      </BG>
      {/* <Text
        fontSize="70"
        fontWeight="400"
        marginTop="200vh"
        textAlign="center"
        color="#CE2727"
      >
        IN THE MEDIA
      </Text>
      <Stack spacing="10" padding="50px">
        <HStack justifyContent="space-between">
          <Img src={inmedia} w="30vw" />
          <Img src={inmedia} w="30vw" />
          <Img src={inmedia} w="30vw" />
        </HStack>
        <HStack justifyContent="space-between">
          <Img src={inmedia} w="30vw" />
          <Img src={inmedia} w="30vw" />
          <Img src={inmedia} w="30vw" />
        </HStack>
      </Stack> */}
      <Spacer height={{ base: '40px', md: '20px' }} />
      <Footer />
    </>
  );
}

export default About;
