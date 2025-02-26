import Contador from "./Contador";
import ContadorReducer from "./ContadorReducer";
import Formulario from "./Formulario";
import TiempoContenedor from "./TiempoContenedor";
import Todos from "./Todos/Todos";
import Usuario from "./Usuario";

const App = () => {
    return ( 
        <>
            <h1 style={{textAlign:"center"}}>TypeScript</h1>
            <Contador />
            <Usuario />
            <hr />
            <TiempoContenedor />
            <hr />
            <ContadorReducer />
            <hr />
            <Formulario />


            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <hr />

            <Todos />
            <br />
            <br />
        </>    
    );
}
 
export default App;