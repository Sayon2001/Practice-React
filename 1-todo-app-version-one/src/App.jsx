import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
import './App.css';

function App() {
  const todoItems = [
    {
      id: 1,
      name: "Buy Milk",
      dueDate: "15/08/2024"
    },
    {
      id: 2,
      name: "Go to College",
      dueDate: "15/08/2024"
    },
    {
      id: 3,
      name: "Go Shopping",
      dueDate: "16/08/2024"
    }
  ]
  return <div className='todo-container'>
    <AppName />
    <div className="inner-container">
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </div>
  </div>
}

export default App;
