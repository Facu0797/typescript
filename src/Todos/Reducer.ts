import { Todo, TodoEstado } from "./Interfaces/interfaces";

export const ESTADO_INICIAL: TodoEstado = {
    contadorTodo: 0,
    todos: [{
        id: "1",
        desc: "Primer todo",
        completado: false
    }],
    completados: 0,
    pendientes: 0
}

type AccionTipo = 
    | {tipo: "agregarTodo", payload: Todo}
    | {tipo: "toggleTodo", payload: {id: string}}

export const todoReducer = (estado: TodoEstado, accion: AccionTipo): TodoEstado => {

    switch (accion.tipo) {
        case "agregarTodo":
            return {
                ...estado,
                todos: [...estado.todos, accion.payload]
            }
        case "toggleTodo":
            return {
                ...estado,
                todos: estado.todos.map(({...todo}) => {
                    if (todo.id === accion.payload.id) {
                        todo.completado = !todo.completado;
                    }
                    return todo
                })
            }
    
        default:
            return estado
    }

}