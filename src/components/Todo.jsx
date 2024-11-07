import { useSelector, useDispatch } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo } from "../features/todo/todoSlice";

export default function Todo() {
    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };

    return (
        <>
            <AddForm /> 
            <h3>Todo List App</h3>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.task}
                        <button onClick={() => handleDelete(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
}