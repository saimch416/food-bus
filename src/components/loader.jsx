import React from 'react'
import loader from '../assets/loader.gif'
import { Flex, Img } from '@chakra-ui/react'
function Loader() {
    return (
        <Flex alignItems='center' justifyContent='center' w='100vw' h='100vh'>
            <Img src={loader} />
        </Flex>
    )
}

export default Loader