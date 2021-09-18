import React from 'react'
import { Badge, Box, Button, HStack, Input, VStack } from '@chakra-ui/react'
import Todos from './Todos'
import { useState } from 'react'

function Addtodo() {
    //date
    var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const [value, setValue] = useState("")
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addtodo(value);
        setValue("");
    };
    const [todolist, settodolist] = useState([
        {
            text: "This is a sample todo",
            isDone: false,
        },
    ])
    const addtodo = ((text) => {
        const newTodos = [...todolist, { text }];
        settodolist(newTodos);
    })
    const donetodo = ((index) => {
        const newTodos = [...todolist];
        newTodos[index].isDone = (!newTodos[index].isDone);
        settodolist(newTodos);
    })
    const removetodo = ((index) => {
        const newTodos = [...todolist];
        newTodos.splice(index, 1);
        settodolist(newTodos);
    })
    const empty = todolist.length === 0 ? true : false; //displaying no todos badge condition
    return (
        <VStack width="100%" spacing="24px">
            <HStack justifyContent="left" width={["90%", "70%", "50%"]}>
            <Box color="white">{date}</Box>
            </HStack>
            {/* Add todo section */}
            <HStack justify="center" width={["90%", "70%", "50%"]}>
                <Input variant="filled" placeholder="Write your task..." value={value} color="white" onChange={e => setValue(e.target.value)} />
                <Button onClick={handleSubmit} colorScheme="teal">Add</Button>
            </HStack>
            {/* todolist section */}
            <VStack width={["90%", "70%", "50%"]} bgColor="white" p={[4, 4,8]} borderRadius="10px">
                {todolist.map((todo, key) => (
                    <Todos key={key} index={key} todo={todo.text} isDone={todo.isDone} donetodo={donetodo} removetodo={removetodo} />
                ))}
                {(empty) ? <Badge p={4} colorScheme="teal">No todos, Yay!!</Badge> : ""}
            </VStack>
        </VStack>
    )
}

export default Addtodo
