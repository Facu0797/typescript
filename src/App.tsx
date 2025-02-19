import Contador from "./Contador";
import ContadorReducer from "./ContadorReducer";
import TiempoContenedor from "./TiempoContenedor";
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
        </>    
    );
}
 
export default App;