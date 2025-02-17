import { useEffect, useRef, useState } from "react";

type TiempoProps = {
    milisegundos: number
}

const Tiempo = ({milisegundos} : TiempoProps) => {
    
    const [segundos, setSegundos] = useState(0)
    const ref = useRef<number>(null)

    useEffect(() => {
        ref.current = setInterval(() => {
            setSegundos(seg => seg + 1)
        }, milisegundos )

        return () => {
            ref.current && clearInterval(ref.current)
        }

    }, [milisegundos])


    return ( 
        <div>
            <h4>Tiempo: {segundos} </h4>
        </div>    
    );
}
 
export default Tiempo;