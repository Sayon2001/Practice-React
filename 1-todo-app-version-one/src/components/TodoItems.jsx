import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteClick }) => {
    return <>
        {todoItems.map((item) => {
            return <TodoItem key={item.id} todoName={item.name} todoDate={item.dueDate} onDeleteClick={onDeleteClick} />
        })}
    </>
};

export default TodoItems;