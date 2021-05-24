import AuthCheck from "../Pages/Authentication/AuthCheck";
// import Login from "../Pages/Authentication/Login";
// import Register from "../Pages/Authentication/Register";
import Dashboard from "../Pages/Dasboard";
import Register from "../Pages/Register/";
import RegisterBirth from "../Pages/Register/Birth";
// import Birthinfo from "../Pages/Register/Birth/Birthinfo";
// import Personinfo from "../Pages/Register/Birth/Personinfo";
// import Parentinfo from "../Pages/Register/Birth/Parentinfo";
// import Requests from "../Pages/Birth";
// import Payments from "../Pages/Payments";
// import Requests from "../Pages/Requests";
// import NewRequest from "../Pages/Requests/NewRequest";
// import RequestProfile from "../Pages/Requests/RequestProfile";
// import Users from "../Pages/Users";

const routes = [
    {
        name: 'Dashboard',
        component: Dashboard,
        url: '/',
        icon: 'tv-2',
        comments: 'Dashboard endpoint',
        color: 'primary',
        sidebar: true,
        roles: ['3', '2', '1']
    },
    {
        name: 'Register',
        component: Register,
        url: '/register/personalinfo',
        icon: 'circle-08',
        comments: 'Register endpoint',
        color: 'red',
        sidebar: true,
        roles: ['3', '2', '1']
    },
    {
        name: 'Register Birth',
        component: RegisterBirth,
        url: '/register/birth',
        icon: 'circle-08',
        comments: 'Register Birth endpoint',
        color: 'red',
        sidebar: false,
        roles: ['3', '2', '1']
    },
    // {
    //     name: 'Register Birth',
    //     component: Parentinfo ,
    //     url: '/register/Parentinfo',
    //     icon: 'circle-08',
    //     comments: 'Register Birth endpoint',
    //     color: 'red',
    //     sidebar: false,
    //     roles: ['3', '2', '1']
    // },
    // {
    //     name: 'Users',
    //     component: Users,
    //     url: '/users',
    //     color: 'info',
    //     icon: 'single-02',
    //     comments: 'Requests Profile endpoint',
    //     sidebar: true,
    //     roles: [3]
    // },
    // {
    //     name: 'Requests',
    //     component: Requests,
    //     url: '/requests',
    //     color: 'info',
    //     icon: 'cart',
    //     comments: 'Dashboard endpoint',
    //     sidebar: true,
    //     roles: [3, 2, 1]
    // },
    // {
    //     name: 'New Requests',
    //     component: NewRequest,
    //     url: '/requests/create',
    //     color: 'info',
    //     icon: 'cart',
    //     comments: 'New Request endpoint',
    //     sidebar: false,
    //     roles: [1]
    // },
    // {
    //     name: 'Requests Profile',
    //     component: RequestProfile,
    //     url: '/requests/:id',
    //     color: 'info',
    //     icon: 'cart',
    //     comments: 'Requests Profile endpoint',
    //     sidebar: false,
    //     roles: [3, 2]
    // },
    // {
    //     name: 'Earnings',
    //     component: Payments,
    //     color: 'default',
    //     url: '/earnings',
    //     icon: 'money-coins',
    //     comments: 'Dashboard endpoint',
    //     sidebar: true,
    //     roles: ['ROLE_PROVIDER']
    // },
]

const misc = [
    {
        name: 'Profile',
        url: '/profile',
        icon: 'single-02',
        color: 'primary',
        component: <>Register</>
    },
    {
        name: 'Settings',
        url: '/settings',
        icon: 'settings',
        color: 'default',
        component: <>Register</>
    },
    {
        name: 'Logout',
        url: '/logout',
        icon: 'user-run',
        color: 'danger',
    }
]

const openRoutes = [
    {
        name: 'login',
        url: '/auth',
        component: AuthCheck,
    },
    // {
    //     name: 'Register',
    //     url: '/register',
    //     component: Register,
    // },
]

export { openRoutes, misc }

export default routes