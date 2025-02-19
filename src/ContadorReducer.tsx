import { useReducer } from "react";

type AccionTipo = 
    | { tipo: "INCREMENTAR" }
    | { tipo: "DECREMENTAR" }
    | { tipo: "RESETEAR" }

const estadoInicial = {
    contador: 10
}

const reducer = (estado: typeof estadoInicial, accion: AccionTipo) => {
    switch (accion.tipo) {
        case "INCREMENTAR":
            return {
                ...estado,
                contador: estado.contador + 1
            }
        case "DECREMENTAR":
            return {
                ...estado,
                contador: estado.contador - 1
            }
        case "RESETEAR":
            return {
                ...estado,
                contador: 0
            }
            
        default:
            return estado;
    }
}

const ContadorReducer = () => {

    const [{contador}, dispatch] = useReducer(reducer, estadoInicial)

    return ( 
        <>
            <h2>Contador Reducer</h2>
            
            <h4>Contador: {contador}</h4>
            <button onClick={() => dispatch({tipo:"INCREMENTAR"})} className="btn btn-primary me-2">+1</button>
            <button onClick={() => dispatch({tipo:"DECREMENTAR"})} className="btn btn-primary me-2">-1</button>
            <button onClick={() => dispatch({tipo:"RESETEAR"})} className="btn btn-danger">RESET</button>
        </>    
    );
}
 
export default ContadorReducer;