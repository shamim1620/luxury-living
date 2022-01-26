import initializeAuthentication from "../Pages/Home/Login/Firebase/Firebase.init";
import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";





initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const [isLoding, setIsLoding] = useState(true)
    const [admin, setAdmin] = useState(false);

    const signInUsingGoogle = (navigate) => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                // The signed-in user info.
                const user = result.user;
                //save to database
                saveUser(user.email, user.displayName, 'PUT');
                navigate('/home');
            })
    }
    const registerUser = (email, password, name, navigate) => {
        setIsLoding(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName: name }
                setUser(newUser);
                //save to database
                saveUser(email, name, 'POST');
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    navigate('/home');

                }).catch((error) => {

                });
            })
            .catch((error) => {

            })
            .finally(() => setIsLoding(false))
    }
    const loginWithEmailPassword = (email, password, navigate) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                navigate('/home');
            })
            .catch((error) => {
                alert("Wrong information");
            });
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

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])


    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            // An error happened.
        });

    }
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()

    }

    return {
        user,
        admin,
        signInUsingGoogle,
        registerUser,
        loginWithEmailPassword,
        isLoding,
        logOut
    }

}
export default useFirebase;