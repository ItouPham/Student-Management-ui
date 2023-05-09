import React, { useRef } from 'react';
import { useLocalStorage } from '../../components/utils/useLocalStorage';
import axios from 'axios';

const Login = () => {
    const [jwt, setJwt] = useLocalStorage('', 'jwt');
    const usernameRef = useRef('');
    const passwordRef = useRef('');

    const login = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:8080/auth/login', {
                username: `${usernameRef.current}`,
                password: `${passwordRef.current}`,
            })
            .then((response) => {
                setJwt(response.data.accessToken);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={login}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        ref={usernameRef}
                        onChange={(e) => (usernameRef.current = e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        ref={passwordRef}
                        onChange={(e) => (passwordRef.current = e.target.value)}
                    />
                </div>
                <button type="submit">submit</button>
            </form>
        </div>
    );
};

export default Login;
