import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Dashboard from '../pages/Dashboard/Dashboard';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
];

const privateRoutes = [{ path: '/dashboard', component: Dashboard }];

export { publicRoutes, privateRoutes };
