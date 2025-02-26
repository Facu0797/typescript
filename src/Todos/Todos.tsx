import { TodoProvider } from "./Context/todosContext";
import ListaTodo from "./ListaTodo";

const Todos = () => {
    return ( 
        <TodoProvider>
            <h1>Todos:</h1>
            <ListaTodo />
        </TodoProvider>    
    );
}
 
export default Todos;