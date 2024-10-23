import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { doCreateUserWithEmailPassword } from "../firebase/auth"

const Signup = () => {
    const navigate = useNavigate()

    const { userLoggedIn } = useAuth()

    if (userLoggedIn) {
        navigate('home')
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [isRegistering, setIsRegistering] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        if (!isRegistering) {
            setIsRegistering(true)
            await doCreateUserWithEmailPassword(email, password)
        }
    }

    return (
        <div className="container">
            <div className="columns is-centered is-vcentered">
                <div className="column is-half">
                    {errorMessage &&
                        <section class="hero is-danger">
                            <div class="hero-body">
                                <p class="title">Error</p>
                                <p class="subtitle">{errorMessage}</p>
                            </div>
                        </section>
                    }
                    <div className="card">
                        <div className="card-content">
                            <h1 className="title has-text-centered">Sign up</h1>
                            <form onSubmit={onSubmit}>
                                <div className="field">
                                    <label className="label">Email</label>
                                    <div className="control">
                                        <input className="input"
                                            type="email"
                                            placeholder="Enter your email"
                                            autoComplete='email'
                                            required
                                            value={email}
                                            onChange={(e) => { setEmail(e.target.value) }} />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Password</label>
                                    <div className="control">
                                        <input className="input"
                                            disabled={isRegistering}
                                            type="password"
                                            autoComplete='new-password'
                                            required
                                            value={password}
                                            onChange={(e) => { setPassword(e.target.value) }} />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Confirm Password</label>
                                    <div className="control">
                                        <input className="input"
                                            disabled={isRegistering}
                                            type="password"
                                            autoComplete='off'
                                            required
                                            value={confirmPassword}
                                            onChange={(e) => { setconfirmPassword(e.target.value) }} />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control has-text-centered">
                                        <button className="button is-primary" type="submit" disabled={isRegistering} >
                                            {isRegistering ? 'Signing Up...' : 'Sign Up'}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Signup