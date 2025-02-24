import useForm from "./hooks/useForm";

const Formulario = () => {

    const {formulario, handleChange} = useForm();
    const {edad, email, nombre} = formulario

    return (
        <>
            <form autoComplete="off">
                <div className="mb-3">
                    <label className="form-label"> Email</label>
                    <input className="form-control" type="email" name="email" onChange={handleChange} value={email}/>
                </div>
                <div className="mb-3">
                    <label className="form-label"> Nombre</label>
                    <input className="form-control" type="text" name="nombre" onChange={handleChange} value={nombre}/>
                </div>
                <div className="mb-3">
                    <label className="form-label"> Edad</label>
                    <input className="form-control" type="number" name="edad" onChange={handleChange} value={edad}/>
                </div>
            </form>
            {
                JSON.stringify(formulario)
            }
        </>
    );
}
 
export default Formulario;