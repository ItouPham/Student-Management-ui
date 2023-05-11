import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Dashboard from '../pages/Dashboard/Dashboard';
import SaveUser from '../pages/AddUser/SaveUser';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
];

const privateRoutes = [
    { path: '/dashboard', component: Dashboard },
    { path: '/add-user', component: SaveUser },
    { path: '/edit-user/:userId', component: SaveUser },
];

export { publicRoutes, privateRoutes };
