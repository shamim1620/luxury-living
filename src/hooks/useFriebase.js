import initializeAuthentication from "../Pages/Home/Login/Firebase/Firebase.init";
import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";



initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const signInUsingGoogle = () => {
       return signInWithPopup(auth, googleProvider)      
    }
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });

    }
    return {
        user,
        error,
        signInUsingGoogle,
        logOut
    }

}
export default useFirebase;