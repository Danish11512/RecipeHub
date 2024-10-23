import { useNavigate } from "react-router-dom"
import {memo} from 'react'

const Header = () => {
    const navigate = useNavigate()

    const goToLogin = () => {
        navigate('/login')
    }

    const goToSignup = () => {
        navigate('/signup')
    }

    const goToMain = () => {
        navigate('/')
    }

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item">
                    <button className="button is-ghost" onClick={goToMain}>Food and Stuff</button>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary" onClick={goToSignup}>
                                <strong>Sign up</strong>
                            </a>
                            <a className="button is-light" onClick={goToLogin}>
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )

}

export default memo(Header)