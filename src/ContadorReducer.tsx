import { useReducer } from "react";

type AccionTipo = 
    | { tipo: "INCREMENTAR" }
    | { tipo: "DECREMENTAR" }
    | { tipo: "RESETEAR" }
    | { tipo: "ACTIVAR_DESACTIVAR" }

const estadoInicial = {
    contador: 10,
    activado: true
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
        case "ACTIVAR_DESACTIVAR":
            return {
                ...estado,
                activado: !estado.activado
            }
            
        default:
            return estado;
    }
}

const ContadorReducer = () => {

    const [{contador, activado}, dispatch] = useReducer(reducer, estadoInicial)

    return ( 
        <>
            <h2>Contador Reducer</h2>
            
            <h4>Contador: {contador}</h4>
            <button onClick={() => dispatch({tipo:"INCREMENTAR"})} className="btn btn-primary me-2">+1</button>
            <button onClick={() => dispatch({tipo:"DECREMENTAR"})} className="btn btn-primary me-2">-1</button>
            <button onClick={() => dispatch({tipo:"RESETEAR"})} className="btn btn-danger me-2">RESET</button>
            <button onClick={() => dispatch({tipo:"ACTIVAR_DESACTIVAR"})} className="btn btn-success">{activado ? "Activar" : "Desactivar"}</button>
        </>    
    );
}
 
export default ContadorReducer;