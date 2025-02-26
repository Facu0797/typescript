import { useContext } from "react";
import { Todo } from "./Interfaces/interfaces";
import { TodoContext } from "./Context/todosContext";

interface todoItemProps {
    todo: Todo
}

const ItemTodo = ({ todo }: todoItemProps) => {

    const {toggleTodo} = useContext(TodoContext)

    const handleDBClick = () => {
        toggleTodo(todo.id)
    }

    return ( 
        <li style={{
            cursor:"pointer",
            textDecoration: todo.completado ? "line-through" : ""
        }}
            onDoubleClick={handleDBClick}>
            {todo.desc}
        </li>
    );
}
 
export default ItemTodo;