import { Container } from 'react-bootstrap';
import NavBar from '../../components/NavBar/NavBar';
import { useEffect } from 'react';

const Home = () => {
    // useEffect(() => {
    //     fetch('/test')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data); // data là một object
    //         });
    // }, []);
    return (
        <>
            <NavBar />
            <Container>
                <h1>HOME PAGE</h1>
            </Container>
        </>
    );
};

export default Home;
