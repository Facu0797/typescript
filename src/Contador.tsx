import { useState } from "react";

const Contador = () => {
    const [contador, setContador] = useState(0)

    const incrementar = (numero:number) => {
        setContador(contador + numero)
    }

    return ( 
        <div className="mt-5">
            <h2>Contador</h2>
            {contador}
            <br />
            <button onClick={()=> incrementar(1)} className="btn btn-outline-primary mt-2 me-2"> +1 </button>
            <button onClick={() => incrementar(5)} className="btn btn-outline-primary mt-2"> +5 </button>
        </div>    
    );
}
 
export default Contador;