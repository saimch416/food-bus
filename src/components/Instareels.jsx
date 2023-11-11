import { HStack, Img, LinkOverlay } from '@chakra-ui/react'
import React from 'react'
import reel from '../assets/instareel.png'
function Instareels() {
  return (
    <HStack padding="20" margin="20px" spacing="10px">
        <LinkOverlay href='https://www.instagram.com/reel/Cypqmi_vJbl/?hl=en'>
        <Img src={reel} />
        </LinkOverlay>
        

    </HStack>
  )
}

export default Instareels