import initializeAuthentication from "../Pages/Home/Login/Firebase/Firebase.init";
import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";




initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const [isLoding,setIsLoding]=useState(true)

    const signInUsingGoogle = () => {

        return signInWithPopup(auth, googleProvider)
    }
    const registerUser = (email, password) => {
        setIsLoding(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

            })
            .catch((error) => {

            })
            .finally(()=>setIsLoding(false))
    }

    //obsarver
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            setIsLoding(false)
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
        isLoding,
        logOut
    }

}
export default useFirebase;