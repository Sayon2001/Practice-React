import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import { TodoItem1, TodoItem2 } from './components/TodoItems'
import './App.css';

function App() {
  return <div className='todo-container'>
    <AppName />
    <div className="inner-container">
      <AddTodo />
      <TodoItem1 />
      <TodoItem2 />
    </div>
  </div>
}

export default App;
