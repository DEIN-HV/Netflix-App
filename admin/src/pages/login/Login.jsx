import React, { useContext, useEffect, useState } from 'react'
import { login } from '../../context/authContext/apiCalls';
import { AuthContext } from '../../context/authContext/AuthContext';
import './login.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { isFetching, dispatch } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        login({ email, password }, dispatch)
    }

    return (
        <div className="login">
            <form className="loginForm">
                <input type="text"
                    className="loginInput"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)} />
                <input type="text"
                    className="loginInput"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)} />
                <button
                    type="button"
                    className="loginButton"
                    onClick={handleLogin}
                    disabled={isFetching}>
                    Login
                </button>

            </form>

        </div>
    )
}

export default Login
