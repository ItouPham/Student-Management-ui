import React, { useRef } from 'react';
import { useLocalStorage } from '../../components/utils/useLocalStorage';
import { Button, Col, Container, Form } from 'react-bootstrap';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import NavBar from '../../components/NavBar/NavBar';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);
const Login = () => {
    const [jwt, setJwt] = useLocalStorage('', 'jwt');
    const usernameRef = useRef('');
    const passwordRef = useRef('');

    const login = (e) => {
        e.preventDefault();
        const reqBody = {
            username: usernameRef.current,
            password: passwordRef.current,
        };
        fetch('auth/login', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(reqBody),
        })
            .then((response) => response.json())
            .then((data) => {
                setJwt(data.accessToken);
            });
    };
    return (
        <>
            <NavBar />
            <div className={cx('wrapper')}>
                <Container className="d-flex justify-content-center">
                    <Col className="bg-light mt-5 py-5 rounded" sm="9" md="5">
                        <h1 className="text-center text-theme">Login</h1>
                        <Form onSubmit={login}>
                            <Form.Group className="d-flex justify-content-center mb-4">
                                <div className="w-75">
                                    <Form.Label htmlFor="username" className="fw-bold text-theme">
                                        Username
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter username"
                                        id="username"
                                        className="p-2"
                                        ref={usernameRef}
                                        onChange={(e) => (usernameRef.current = e.target.value)}
                                    />
                                </div>
                            </Form.Group>
                            <Form.Group className="d-flex justify-content-center mb-5">
                                <div className="w-75">
                                    <Form.Label htmlFor="password" className="fw-bold text-theme">
                                        Password
                                    </Form.Label>
                                    <Form.Control
                                        placeholder="Enter password"
                                        type="password"
                                        id="password"
                                        className="p-2"
                                        ref={passwordRef}
                                        onChange={(e) => (passwordRef.current = e.target.value)}
                                    />
                                </div>
                            </Form.Group>
                            <Col className="text-center">
                                <Button type="submit" size="lg" variant="success" className="mb-4">
                                    SIGN IN
                                </Button>
                                <p>
                                    Forgot{' '}
                                    <Link to="/" className="text-theme">
                                        Username / Password
                                    </Link>
                                    ?
                                </p>
                            </Col>
                        </Form>
                    </Col>
                </Container>
            </div>
        </>
    );
};

export default Login;
