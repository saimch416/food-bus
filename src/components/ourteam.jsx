import { Box, HStack, Img, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import team1 from '../assets/team1.png'
import styled, { keyframes } from 'styled-components'
function OurTeam() {
    const breatheAnimation = keyframes`
 0% {  transform: translateY(0px); 

}
 50% {  transform: translateY(-20px);
   
}
 100% {  transform: translateY(0px);
   
}

`
    const AnimationContainer = styled.div`
  transform: translate(0%);
  &:hover { 
    pointer:cursor;
    animation-name: ${breatheAnimation};
    animation-duration: 3s;
    animation-iteration-count: infinite;

   }
  


`;
    return (
        <Stack alignItems='center' spacing='30px'>
            <Text fontSize='48px' >
                Meet Our Team
            </Text>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Varius sed pharetra dictum neque
            </Text>
            <HStack spacing='20px'>
                {/* Member start */}
                <Stack alignItems='center'>

                    <AnimationContainer>
                        <Img w='200px' h='200px' src={team1} />
                    </AnimationContainer>

                    <Text fontSize='20px' fontWeight='bold' >
                        Bulbul Hassan
                    </Text>
                    <Text fontSize='16px' fontWeight='light'>
                        Chief
                    </Text>
                </Stack>
                {/* Member end */}
                {/* Member start */}
                <Stack alignItems='center'>


                    <AnimationContainer>
                        <Img w='200px' h='200px' src={team1} />
                    </AnimationContainer>
                    <Text fontSize='20px' fontWeight='bold' >
                        Bulbul Hassan
                    </Text>
                    <Text fontSize='16px' fontWeight='light'>
                        Chief
                    </Text>
                </Stack>
                {/* Member end */} {/* Member start */}
                <Stack alignItems='center'>


                    <AnimationContainer>
                        <Img w='200px' h='200px' src={team1} />
                    </AnimationContainer>
                    <Text fontSize='20px' fontWeight='bold' >
                        Bulbul Hassan
                    </Text>
                    <Text fontSize='16px' fontWeight='light'>
                        Chief
                    </Text>
                </Stack>
                {/* Member end */} {/* Member start */}
                <Stack alignItems='center'>

                    <AnimationContainer>
                        <Img w='200px' h='200px' src={team1} />
                    </AnimationContainer>
                    <Text fontSize='20px' fontWeight='bold' >
                        Bulbul Hassan
                    </Text>
                    <Text fontSize='16px' fontWeight='light'>
                        Chief
                    </Text>
                </Stack>
                {/* Member end */}
            </HStack>
        </Stack>
    )
}

export default OurTeam