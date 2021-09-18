import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import "../App.css"


function Header() {
    return (
        <Box width="100%" textAlign="center" height="15vh" pt="5vh" >
            <Heading as="h1" color="white">To-Do List</Heading>
            <Text as="h5" color="white">All your task at one place</Text>
        </Box>
    )
}

export default Header
