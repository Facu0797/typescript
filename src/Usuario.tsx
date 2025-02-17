import { useState } from "react";

interface Usuario {
    uid: string,
    nombre: string;
}

const Usuario = () => {

    const [user, setUser] = useState<Usuario>()

    const login = () => {
        setUser({
            uid: "ABC123",
            nombre: "Facundo"
        })
    }

    return ( 
        <div className="mt-5">
            <h1>Usuario - TPS</h1>
            <button onClick={login} className="btn btn-outline-success">Login</button>

            {
                (!user)
                ? <pre>No hay usuario registrado</pre>
                : <pre>{JSON.stringify(user)}</pre>  
            }
        </div>
        
    );
}
 
export default Usuario;