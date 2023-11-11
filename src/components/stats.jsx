import { Box, HStack, Img, Stack, Text, background, position } from '@chakra-ui/react'
import React from 'react'
import placeholder from '../assets/food.jpg'
import styled from 'styled-components';
import hat from '../assets/hat.png';
function Stats() {
    const BG = styled.div`
    background-image:url(${placeholder}); 
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; 
  `;
    const Effect = styled.div`
    transition: 300ms linear;
  &:hover { 
    pointer:cursor;
    transform:scale(1.05);
  

   }
`;
    return (
        <BG>
            <Box display='flex' alignItems='center' justifyContent='center' color='#FAFF04' >
                <HStack margin=' 100px' w='100%' h='200px' bg='#00000080' justifyContent='space-between' padding='5px'>
                    <Effect>
                        <Stack w='250px' align='center'>
                            <Img h='100px' w='100px' src={hat}></Img>
                            <Text fontSize='26px'>
                                Professional Chefs
                            </Text>
                            <text fontWeight='700' fontSize='40px'>
                                420
                            </text>
                        </Stack>
                    </Effect>
                    {/* Mock */}
                    <Effect>
                        <Stack w='250px' align='center'>
                            <Img h='100px' w='100px' src={hat}></Img>
                            <Text fontSize='26px'>
                                Professional Chefs
                            </Text>
                            <text fontWeight='700' fontSize='40px'>
                                420
                            </text>
                        </Stack>
                    </Effect>
                    <Effect>
                        <Stack w='250px' align='center'>
                            <Img h='100px' w='100px' src={hat}></Img>
                            <Text fontSize='26px'>
                                Professional Chefs
                            </Text>
                            <text fontWeight='700' fontSize='40px'>
                                420
                            </text>
                        </Stack>
                    </Effect>
                    <Effect>
                        <Stack w='250px' align='center'>
                            <Img h='100px' w='100px' src={hat}></Img>
                            <Text fontSize='26px'>
                                Professional Chefs
                            </Text>
                            <text fontWeight='700' fontSize='40px'>
                                420
                            </text>
                        </Stack>
                    </Effect>
                    {/* Mock  */}

                </HStack>
            </Box>
        </BG>

    )
}

export default Stats