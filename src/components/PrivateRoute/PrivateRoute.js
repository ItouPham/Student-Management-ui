import React, { useState } from 'react';
import { useLocalStorage } from '../utils/useLocalStorage';
import { Navigate, useNavigate } from 'react-router-dom';
import ajax from '../utils/FetchService';

const PrivateRoute = ({ children }) => {
    let navigate = useNavigate();
    const [jwt, setJwt] = useLocalStorage('', 'jwt');
    const [isLoading, setIsLoading] = useState(true);
    const [isValid, setIsValid] = useState(null);

    if (jwt) {
        ajax(`auth/validate?token=${jwt}`, 'GET', jwt).then((validate) => {
            setIsValid(validate);
            setIsLoading(false);
        });
    } else {
        return <Navigate to="/login" />;
    }
    if (isLoading) {
        return <div>Loading....</div>;
    }

    if (isValid === true) {
        return children;
    } else {
        navigate('/login');
        localStorage.setItem('jwt', null);
    }

    // return isLoading ? <div>Loading....</div> : isValid === true ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
