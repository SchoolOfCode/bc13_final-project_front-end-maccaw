import React, { useContext, useEffect, useState} from "react";
import { Auth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

//creates authorisation context & stored in variable
const AuthContext=React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}
//const {signUp, logIn, logOut} = useAuth

export function AuthProvider({children}) {
    //store current user login details
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])


    const value = {
        currentUser,
        signUp
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}