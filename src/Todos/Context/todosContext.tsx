import { JSX, createContext, useReducer } from "react";
import { ESTADO_INICIAL, todoReducer } from "../Reducer";
import { TodoEstado } from "../Interfaces/interfaces";

interface props {
    children: JSX.Element | JSX.Element[]
}

type contextProps = {
    todoEstado: TodoEstado;
    toggleTodo: (id: string) => void;
}

export const TodoContext = createContext<contextProps>({} as contextProps);

export const TodoProvider = ({children}: props) => {

    const [todoEstado, dispatch] = useReducer(todoReducer, ESTADO_INICIAL)

    const toggleTodo = ( id: string ) => {
        dispatch({tipo: "toggleTodo", payload: {id}})
    }

    return (
    <TodoContext.Provider value={{
        todoEstado,
        toggleTodo
    }}>
        {children}
    </TodoContext.Provider>
    )
}