import {VStack } from '@chakra-ui/react';
import React from 'react'
import Addtodo from './Components/Addtodo';
import Header from './Components/Header';
import './App.css'

function App() {
  return (
    <VStack width="100%" className="main" p={4}>
      <Header />
      <Addtodo />
    </VStack>
  );
}

export default App;
