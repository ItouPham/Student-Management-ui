import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { privateRoutes, publicRoutes } from './routes';
import NotFound from './pages/NotFound/NotFound';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        return <Route key={`public route ${index}`} path={route.path} element={<Page />}></Route>;
                    })}
                    {privateRoutes.map((route, index) => {
                        const Page = route.component;
                        return (
                            <Route
                                key={`private route ${index}`}
                                path={route.path}
                                element={
                                    <PrivateRoute>
                                        <Page />
                                    </PrivateRoute>
                                }
                            ></Route>
                        );
                    })}
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
