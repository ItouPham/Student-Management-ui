import React, { useEffect } from 'react';
import { useLocalStorage } from '../../components/utils/useLocalStorage';
import NavBar from '../../components/NavBar/NavBar';
import { Button, Container } from 'react-bootstrap';
import axios from 'axios';

const Dashboard = () => {
    const [jwt, setJwt] = useLocalStorage('', 'jwt');

    const handleTest = () => {
        fetch('admin/user', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwt}`,
            },
        })
            .then((response) => {
                if (response.status === 200) return response.json();
            })
            .then((data) => console.log(data));
    };
    return (
        <>
            <NavBar />
            <Container>
                <h1>Dashboard page</h1>
                <Button onClick={handleTest}>Test</Button>
            </Container>
        </>
    );
};

export default Dashboard;
