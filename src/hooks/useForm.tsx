import { ChangeEvent, useState } from "react";

interface Form {
    email: string,
    nombre: string,
    edad: number;
}

const useForm = () => {

    const [formulario, setFormulario] = useState<Form>({
        email:"",
        nombre:"",
        edad: 27
    })

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setFormulario({
            ...formulario,
            [e.target.name]:e.target.value
        });
    }

    return {
        formulario, handleChange
    }
}
 
export default useForm;