import { createContext, useState } from "react"

export const LoginContext = createContext();

export const LoginProvider = ( { children } ) => {
    const [logged, setLogged] = useState(false);
    const [waiting, setWaiting] = useState(false);
    const [user, setUser] = useState(undefined);
    const [register, setRegister] = useState(false);

    function wait() {
        setWaiting(true);
    }

    function error() {
        setWaiting(false);
    }

    function logout() {
        setLogged(false);
        setUser(undefined);
        error();
    }

    function signup() {
        setRegister(!register); 
    } 

    function login() {
        setLogged(true);
    }

    async function firebaseLogin(user) {
        const {displayName, isAnonymous, photoURL, email, uid} = await user;

        if ( uid && !isAnonymous ) {
            login();
            setUser({ nombre: displayName, img: photoURL, email, uid });
        }
    }

    return (
        <LoginContext.Provider value = { { firebaseLogin, logged, register, waiting, logout, signup, login, error, user, wait  } } >
            {children}
        </LoginContext.Provider>
    )
} 