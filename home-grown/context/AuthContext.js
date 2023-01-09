import React, { useContext, useEffect} from "react";
import { Auth } from "firebase/auth";
import { auth } from "../config/firebase";

const AuthContext=React.createContext()

export function useAuth()

export function AuthProvider() {
    const [currentUser, setCurrentUser] = useState()

    function signUp(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])


    const value = {
        currentUser
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}