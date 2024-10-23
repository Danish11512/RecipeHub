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
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item">
                    <button class="button is-ghost" onClick={goToMain}>Food and Stuff</button>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a class="button is-primary" onClick={goToSignup}>
                                <strong>Sign up</strong>
                            </a>
                            <a class="button is-light" onClick={goToLogin}>
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