import React from 'react';
import { useLocalStorage } from '../../components/utils/useLocalStorage';

const Dashboard = () => {
    const [jwt, setJwt] = useLocalStorage('', 'jwt');
    return (
        <div>
            <h1>Dashboard page</h1>
            <div>
                <h4>Token:</h4>
                <p>{jwt}</p>
            </div>
        </div>
    );
};

export default Dashboard;
