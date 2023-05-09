import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { privateRoutes, publicRoutes } from './routes';

function App() {
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
