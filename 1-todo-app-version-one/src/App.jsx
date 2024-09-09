import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
import './App.css';
import WelcomeMessage from './components/WelcomeMessage'

function App() {

  const [todoItems, setTodoItems] = useState([])

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New item : ${itemName} Date : ${itemDueDate}`)
    const newTodoItems = [...todoItems, { name: itemName, dueDate: itemDueDate }]
    setTodoItems(newTodoItems)
  }
  const handleDeleteItem = (todoItemName) => {
    console.log(`Item Delete: ${todoItemName}`)
  }

  return <div className='todo-container'>
    <AppName />
    <div className="inner-container">
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length <= 0 && <WelcomeMessage todoItems={todoItems} />}
      <TodoItems todoItems={todoItems} onDeleteCLick={handleDeleteItem} />
    </div>
  </div>
}

export default App;
