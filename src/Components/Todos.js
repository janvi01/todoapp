import React from 'react'
import { ImCross, ImCheckmark } from 'react-icons/im'
import { Text, HStack, IconButton, Divider, Box, Spacer } from '@chakra-ui/react'

function Todos({ todo, index, donetodo, removetodo, isDone }) {
    return (
        <Box width="100%">
            <HStack>
                <Text style={{ textDecoration: isDone ? "line-through" : "" }} fontWeight="bold"> {todo}</Text>
                <Spacer />
                <IconButton icon={<ImCheckmark />} onClick={() => donetodo(index)} colorScheme="teal"></IconButton>
                <IconButton icon={<ImCross />} onClick={() => removetodo(index)} colorScheme="teal"></IconButton>
            </HStack>
            <Divider mt={4} />
        </Box>
    )
}

export default Todos
