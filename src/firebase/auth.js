import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth } from './firebase'

export const doCreateUserWithEmailPassword = async (email, pass) => {
    createUserWithEmailAndPassword(auth, email, pass)
}

export const doSignInWithEmailPassword = async (email, pass) => {
    signInWithEmailAndPassword(auth, email, pass)
}
export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
    return result
}

export const doSignOut = () => {
    return auth.signOut()
}