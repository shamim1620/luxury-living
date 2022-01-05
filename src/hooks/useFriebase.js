import initializeAuthentication from "../Pages/Home/Login/Firebase/Firebase.init";
import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";



initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const registerUser = (email,password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                
            })
            .catch((error) => {
                
            });
    }

    //obsarver
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [])


    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            // An error happened.
        });

    }
    return {
        user,
        signInUsingGoogle,
        registerUser,
        logOut
    }

}
export default useFirebase;