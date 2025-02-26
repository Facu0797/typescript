import { useContext } from "react";
import { TodoContext } from "./Context/todosContext";
import ItemTodo from "./ItemTodo";

const ListaTodo = () => {

    const {todoEstado} = useContext(TodoContext);
    const {todos} = todoEstado
    

    return ( 
        <ul>
            {todos.map(todo => <ItemTodo key={todo.id} todo={todo}/>)}
        </ul>    
    );
}
 
export default ListaTodo;