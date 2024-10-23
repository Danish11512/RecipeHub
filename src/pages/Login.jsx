import { useState } from "react"
import { useAuth } from '../context/AuthContext'
import { doSignInWithEmailPassword, doSignInWithGoogle } from "../firebase/auth"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const { userLoggedIn } = useAuth()
    const navigate = useNavigate()

    if (userLoggedIn) {
        navigate('home')
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        if (!isSigningIn) {
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

    const goToSignup = () => {
        navigate('/signup')
    }

    const goToMain = () => {
        navigate('/')
    }

    return (
        <div className="container">
            <div className="columns is-centered is-vcentered">
                <div className="column is-half">
                    <div className="card">
                        <div className="card-content">
                            <h1 className="title has-text-centered">Login</h1>
                            <form>
                                <div className="field">
                                    <label className="label">Email</label>
                                    <div className="control">
                                        <input className="input" type="email" placeholder="Enter your email" />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Password</label>
                                    <div className="control">
                                        <input className="input" type="password" placeholder="Enter your password" />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control has-text-centered">
                                        <button className="button is-primary">Login</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <footer className="card-footer">
                            <p className="card-footer-item">
                                <span>
                                    <a onClick={goToMain}>Forgot Password?</a>
                                </span>
                            </p>
                            <p className="card-footer-item">
                                <span>
                                    <a onClick={goToSignup}>Sign Up</a>
                                </span>
                            </p>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    )


}
export default Login