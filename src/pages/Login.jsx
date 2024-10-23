import { useState } from "react"
import { useAuth } from '../context/AuthContext'
import { doSignInWithEmailPassword, doSignInWithGoogle } from "../firebase/auth"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const { userLoggedIn } = useAuth()
    const navigate = useNavigate()

    if ( userLoggedIn ) {
        navigate('home')
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        if(!isSigningIn) {
            setIsSigningIn(true)
            await doSignInWithEmailPassword(email, password)
        }
    }

    const onGoogleSignIn = (e) => {
        e.preventDefault()
        if (!isSigningIn) {
            setIsSigningIn(true)
            doSignInWithGoogle().catch(err => {
                setIsSigningIn(false)
            })
        }
    }

    return (
        <div>
            
        </div>
    )


}
export default Login