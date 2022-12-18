import { useState } from "react"
import { commonRegistration } from "../../firebase";

export const Register = ( {signup, waiting, firebaseLogin} ) => {
    const [form, setForm] = useState({name: '', pass: ''});

    function handleInputChange(e) {
        const { name, value } = e.target;
        setForm({...form, [name]: value});
    }

    function checkForm(e) {
        e.preventDefault();
        const {name, pass} = form
        if (name !== '' && pass !== '') {
            const user = commonRegistration(name, pass);
            firebaseLogin(user);
        }
    }

    return (
        <div className="d-flex justify-content-center mh-100">
            <form name = 'login'>
                <h1 className = "my-5">Registro</h1>
                <div className = "form-floating mb-3">
                    <input 
                        name = "name" type = "email" className = "form-control" id = "floatingInput" onChange = {handleInputChange} 
                 />
                    <label htmlFor = "floatingInput" >
                        E-mail        
                    </label>
                </div>

                <div className = "form-floating">
                    <input 
                        name = "pass" type = "password" className = "form-control" id = "floatingPassword" onChange = {handleInputChange} 
                    />
                    <label htmlFor = "floatingPassword" >
                        Password
                    </label>
                </div>
            
                <div className = "container my-5">
                    <button disabled = {waiting} className = "row w-100 btn btn-primary my-1 btn-dark" onClick = {checkForm}>
                        Registrarse
                    </button>
                </div>

                <button className="btn link-secondary btn-dark mt-5 mb-5 text-info" onClick={signup}>
                    Loguearse
                </button>
            </form>
        </div>
    )
}