import { createContext,  useEffect,  useState } from "react";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] =useState(true)

    // console.log(user,loading);
    const createNewUser = (email,passwprd) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,passwprd);
    };
    // user logout 
    const logOut = () =>{
         setLoading(true)
        return signOut(auth);
    }
// login excisting user 

    const userLogin = (email,password)=>{ 
         setLoading(true)
        return signInWithEmailAndPassword ( auth, email, password) 

     }

     const updateUserProfile = (updatedData) =>{
        return updateProfile(auth.currentUser,updatedData);

     }

    const authInfo ={
        user,
        createNewUser,
        setUser,
        logOut,
        userLogin,
        loading,
        updateUserProfile
    }
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,(currentUser) =>{
            setUser(currentUser);
            setLoading(false)
        });
        return()=>{
            unsubscribe()
        }
    },[])

    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;