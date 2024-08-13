import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
    return <>
        {todoItems.map((item) => {
            return <TodoItem key={item.id} todoName={item.name} todoDate={item.dueDate} />
        })}
    </>
};

export default TodoItems;