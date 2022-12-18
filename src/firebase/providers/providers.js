import { signInWithEmailAndPassword as signin, 
    createUserWithEmailAndPassword as register, 
    GoogleAuthProvider, 
    signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "../";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async(error, user) => {
    try {
        const result = await signInWithPopup(firebaseAuth, googleProvider);
        const { displayName, isAnonymous, photoURL, email, uid } = result.user;
        return {displayName, isAnonymous, email, photoURL, uid } 
    }
    catch(err) {
        error()
        console.log("Error de autenticación con Google:", err);
    }
}

export const commonRegistration = async(name, pass) => {
    try {
        const result = await register(firebaseAuth, name, pass);
        const { displayName, isAnonymous, photoURL, email, uid } = result.user;
        return {displayName, isAnonymous, email, photoURL, uid } 
    }
    catch(error) {
        error()
        console.log("Ha ocurrido un error en el registro:", error);
    }
} 

export const commonLogin = async(name, pass) => {
    try {
        const result = await signin(firebaseAuth, name, pass);
        const { displayName, isAnonymous, photoURL, email, uid } = result.user;
        return {displayName, isAnonymous, email, photoURL, uid } 
    }
    catch(error) {
        error()
        console.log("Ha ocurrido un error en el login:", error);
    }    
}