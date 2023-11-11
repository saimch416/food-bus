import {
  Avatar,
  Box,
  Container,
  HStack,
  Stack,
  Text,
  Flex,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import Slider from 'react-slick';
import Testi from '../assets/testlarki.png';

const Testamonials = () => {
  const [settings] = useState({
    // dots: true,

    infinite: true,
    slidesToShow: 1,
    // slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    // speed: 1000,
    autoplaySpeed: 500,
    cssEase: 'ease-out',
  });

  return (
    <Container maxW="container.xl" centerContent>
      <div className="Testamonials-bg">
        <div className="Testamonials">
          <Text textAlign="center" fontSize={{ base: '2xl', md: '4xl' }}>
            “What Our Customer Say”
          </Text>
        </div>
        <br />
        <br />
        <Wrap
          justify="center"
          spacing={{ base: 4, md: 10 }}
          padding={{ base: 4, md: 20 }}
        >
          <WrapItem>
            <Stack
              padding={{ base: 4, md: 10 }}
              bg="#FBF1F1"
              borderRadius="10px"
              w={{ base: '90%', md: '300px' }}
            >
              <Text
                color="#AD343E"
                fontSize={{ base: 'xl', md: '2xl' }}
                marginBottom="24px"
              >
                “Simply delicious”
              </Text>
              <Text
                lineHeight={{ base: '1.5', md: '1.8' }}
                fontSize={{ base: 'md', md: 'lg' }}
                marginBottom="30px"
              >
                Place exceeded my expectations on all fronts. The ambiance was
                cozy and relaxed, making it a perfect venue for our anniversary
                dinner. Each dish was prepared and beautifully presented.
              </Text>
              <Flex
                direction={{ base: 'column', md: 'row' }}
                alignItems="center"
                borderTop="1px Solid #5118F1"
                paddingTop="30px"
              >
                <Avatar size="lg" src={Testi}></Avatar>
                <Stack marginLeft={{ md: '10px' }}>
                  <Text color="#FF2507" fontWeight="700" fontSize="lg">
                    Sophire Robson
                  </Text>
                  <Text fontSize="lg">Los Angeles, CA</Text>
                </Stack>
              </Flex>
            </Stack>
          </WrapItem>

          <WrapItem>
            <Stack
              padding={{ base: 4, md: 10 }}
              bg="#FBF1F1"
              borderRadius="10px"
              w={{ base: '90%', md: '300px' }}
            >
              <Text
                color="#AD343E"
                fontSize={{ base: 'xl', md: '2xl' }}
                marginBottom="24px"
              >
                “Simply delicious”
              </Text>
              <Text
                lineHeight={{ base: '1.5', md: '1.8' }}
                fontSize={{ base: 'md', md: 'lg' }}
                marginBottom="30px"
              >
                Place exceeded my expectations on all fronts. The ambiance was
                cozy and relaxed, making it a perfect venue for our anniversary
                dinner. Each dish was prepared and beautifully presented.
              </Text>
              <Flex
                direction={{ base: 'column', md: 'row' }}
                alignItems="center"
                borderTop="1px Solid #5118F1"
                paddingTop="30px"
              >
                <Avatar size="lg" src={Testi}></Avatar>
                <Stack marginLeft={{ md: '10px' }}>
                  <Text color="#FF2507" fontWeight="700" fontSize="lg">
                    Sophire Robson
                  </Text>
                  <Text fontSize="lg">Los Angeles, CA</Text>
                </Stack>
              </Flex>
            </Stack>
          </WrapItem>
          <WrapItem>
            <Stack
              padding={{ base: 4, md: 10 }}
              bg="#FBF1F1"
              borderRadius="10px"
              w={{ base: '90%', md: '300px' }}
            >
              <Text
                color="#AD343E"
                fontSize={{ base: 'xl', md: '2xl' }}
                marginBottom="24px"
              >
                “Simply delicious”
              </Text>
              <Text
                lineHeight={{ base: '1.5', md: '1.8' }}
                fontSize={{ base: 'md', md: 'lg' }}
                marginBottom="30px"
              >
                Place exceeded my expectations on all fronts. The ambiance was
                cozy and relaxed, making it a perfect venue for our anniversary
                dinner. Each dish was prepared and beautifully presented.
              </Text>
              <Flex
                direction={{ base: 'column', md: 'row' }}
                alignItems="center"
                borderTop="1px Solid #5118F1"
                paddingTop="30px"
              >
                <Avatar size="lg" src={Testi}></Avatar>
                <Stack marginLeft={{ md: '10px' }}>
                  <Text color="#FF2507" fontWeight="700" fontSize="lg">
                    Sophire Robson
                  </Text>
                  <Text fontSize="lg">Los Angeles, CA</Text>
                </Stack>
              </Flex>
            </Stack>
          </WrapItem>
        </Wrap>
      </div>
    </Container>
  );
};
export default Testamonials;
