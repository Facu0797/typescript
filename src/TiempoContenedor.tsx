import { useState } from "react";
import Tiempo from "./Tiempo";

const TiempoContenedor = () => {

    const [milisegundos, setMilisegundos] = useState(1000)

    return ( 
        <>
            <h4> Milisegundos <small> {milisegundos} </small> </h4>

            <button onClick={() => setMilisegundos(1000)} className="btn btn-primary">1000</button>
            <button onClick={() => setMilisegundos(200)} className="btn btn-primary">200</button>

            <br />
            <br />
            <Tiempo milisegundos={milisegundos}/>
        </>   
    );
}
 
export default TiempoContenedor;