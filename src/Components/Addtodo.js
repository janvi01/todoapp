import React from 'react'
import { Badge, Button, HStack, Input, VStack } from '@chakra-ui/react'
import Todos from './Todos'
import { useState } from 'react'

function Addtodo() {
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
        if (newTodos.length === 0)
            console.log("empty")
        settodolist(newTodos);
    })
    const empty = todolist.length === 0 ? true : false;
    return (
        <VStack width="100%" spacing="24px">
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
