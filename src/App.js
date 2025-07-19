import logo from './logo.svg';
import './App.css';
import { Checkbox } from '@mui/material';
import Checkboxes from './Mat';
import BasicGrid from './Mat';
import AbcIcon from '@mui/icons-material/Abc';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import ToDoList from './components/ToDoList';
import { TodoContext } from './contexts/todoContext';
import React, { useState } from 'react';
const Itodos=[
  {id:1, title: 'المهمة الاولي',details:"hhhhhhhhh", completed: false},
  {id:2, title: 'المهمة الثانية',details:"hhhhhhhhh", completed: true},
  {id:3, title: 'المهمة الثالثة',details:"hhhhhhhhh", completed: false},
]
function App() {
      const [todos,setTodos]=useState(Itodos);
  return (

    <div className="App">
      <TodoContext.Provider value={[ todos, setTodos] }>
        <div className="bg-black rounded dark:bg-gray-800 min-h-screen flex flex-col  justify-center">

          <ToDoList />

        </div>

      </TodoContext.Provider>
      
      
      
    </div>
  );
}


export default App;
