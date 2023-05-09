import { Container } from 'react-bootstrap';
import styles from './Home.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocalStorage } from '../../components/utils/useLocalStorage';

const Home = () => {
    // const [jwt, setJwt] = useLocalStorage('', 'jwt');
    // useEffect(() => {
    //     if (!jwt) {
    //         axios
    //             .post('http://localhost:8080/auth/login', {
    //                 username: 'admin',
    //                 password: 'cuong2023',
    //             })
    //             .then((response) => {
    //                 setJwt(response.data.accessToken);
    //             })
    //             .catch((err) => {
    //                 console.log(err);
    //             });
    //     }
    // }, []);
    return (
        <Container>
            <h1>HOME PAGE</h1>
        </Container>
    );
};

export default Home;
