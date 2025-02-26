export interface TodoEstado {
    contadorTodo: number
    todos: Todo[]
    completados: number
    pendientes: number
}

export interface Todo {
    id:string;
    desc: string;
    completado: boolean;
}