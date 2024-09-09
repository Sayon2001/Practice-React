import { useState } from 'react';
import styles from './AddTodo.module.css'
function AddTodo({ onNewItem }) {

    const [todoName, setTodoName] = useState()

    const [dueDate, setDueDate] = useState()

    const handleNameChange = (event) => {
        setTodoName(event.target.value)
    }

    const handleDateChange = (event) => {
        setDueDate(event.target.value)
    }

    const handleAddButtonCLicked = (event) => {
        onNewItem(todoName, dueDate)
        setTodoName("")
        setDueDate("")
    }


    return (
        <div className="container text-center">
            <div className="row my-row">
                <div className="col-4">
                    <input type="text" name="" id="" placeholder='Enter Todo Task Here.' value={todoName} onChange={handleNameChange} />
                </div>
                <div className="col-4">
                    <input type="date" value={dueDate} name="" id="" onChange={handleDateChange} />
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-success my-button" onClick={handleAddButtonCLicked}>Add</button>
                </div>
            </div>
        </div>
    );
}

export default AddTodo;