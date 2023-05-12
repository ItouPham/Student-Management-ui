import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Dashboard from '../pages/Dashboard/Dashboard';
import AddUser from '../pages/AddUser/AddUser';
import UpdateUser from '../pages/UpdateUser/UpdateUser';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
];

const privateRoutes = [
    { path: '/dashboard', component: Dashboard },
    { path: '/add-user', component: AddUser },
    { path: '/edit-user/:userId', component: UpdateUser },
];

export { publicRoutes, privateRoutes };
