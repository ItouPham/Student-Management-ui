import React from 'react';
import classNames from 'classnames/bind';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useLocalStorage } from '../utils/useLocalStorage';
import styles from './NavBar.module.scss';

const cx = classNames.bind(styles);
const NavBar = () => {
    const [jwt, setJwt] = useLocalStorage('', 'jwt');
    return (
        <>
            <Navbar bg="success" variant="dark">
                <Container>
                    <Link to="/" className={cx('text-light fs-2 me-4', 'nav-item')}>
                        LOGO
                    </Link>
                    <Nav className="me-auto">
                        <Link to="/" className={cx('text-light me-3', 'nav-item')}>
                            Home
                        </Link>
                        <Link to="/dashboard" className={cx('text-light me-3', 'nav-item')}>
                            Dashboard
                        </Link>
                        {jwt ? (
                            <Link
                                to="/login"
                                onClick={() => {
                                    localStorage.setItem('jwt', null);
                                }}
                                className={cx('text-light me-3', 'nav-item')}
                            >
                                Logout
                            </Link>
                        ) : (
                            <></>
                        )}
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
