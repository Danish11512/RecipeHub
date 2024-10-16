import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../../../firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth'

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [userLoggedIn, setUserLoggedIn] = useState(false)
    const [isLoading, setLoading] = useState(true)

    useEffect = (() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser)
        return unsubscribe
    }, [])

    const initializeUser = async (user) => {
        if (user) {
            setCurrentUser({...user})
            setUserLoggedIn(true)
        } else {
            setCurrentUser(null)
            setUserLoggedIn(false)
        }
        setLoading(false)
    }

    const authValues = {
        currentUser, 
        userLoggedIn,
        isLoading
    }

    return (
        <AuthContext.Provider value={authValues}>
            {!isLoading && children}
        </AuthContext.Provider>

    )

}

export const useAuth = () => {
    return useContext(AuthContext)
}