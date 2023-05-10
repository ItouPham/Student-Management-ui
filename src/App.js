import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { privateRoutes, publicRoutes } from './routes';
import { useEffect } from 'react';

function App() {
    // useEffect(() => {
    //     const reqBody = {
    //         username: 'admin',
    //         password: 'cuong2023',
    //     };
    //     fetch('auth/login', {
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         method: 'POST',
    //         body: JSON.stringify(reqBody),
    //     })
    //         .then((response) => response.json())
    //         .then((data) => console.log(data.accessToken));
    // });
    return (
        <div className="App">
            <Routes>
                {publicRoutes.map((route) => {
                    const Page = route.component;
                    return <Route path={route.path} element={<Page />}></Route>;
                })}
                {privateRoutes.map((route) => {
                    const Page = route.component;
                    return (
                        <Route
                            path={route.path}
                            element={
                                <PrivateRoute>
                                    <Page />
                                </PrivateRoute>
                            }
                        ></Route>
                    );
                })}
            </Routes>
        </div>
    );
}

export default App;
