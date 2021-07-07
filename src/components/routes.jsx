import AuthCheck from "../Pages/Authentication/AuthCheck";
// import Contact from "../Pages/Contact";
// import Login from "../Pages/Authentication/Login";
// import Register from "../Pages/Authentication/Register";
import Dashboard from "../Pages/Dasboard";
import Register from "../Pages/Register/";
import RegisterBirth from "../Pages/Register/Birth";
import RegisterMarriage from "../Pages/Register/Marriage";
import Death from "../Pages/Register/Death";
import ViewPersons from "../Pages/View";
import PersonProfile from "../Pages/View/PersonProfile";

// import Birthinfo from "../Pages/Register/Birth/Birthinfo";
// import Personinfo from "../Pages/Register/Birth/Personinfo";
// import Parentinfo from "../Pages/Register/Birth/Parentinfo";
// import Requests from "../Pages/Birth";
// import Payments from "../Pages/Payments";
// import Requests from "../Pages/Requests";
// import NewRequest from "../Pages/Requests/NewRequest";
// import RequestProfile from "../Pages/Requests/RequestProfile";
import Users from "../Pages/Users";
import ViewMarried from "../Pages/View/ViewMarried";
import ViewDeaths from "../Pages/View/ViewDeaths";

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
        url: '/register',
        icon: 'world',
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
    {
        name: 'Register Birth',
        component: RegisterMarriage,
        url: '/register/marriage',
        icon: 'circle-08',
        comments: 'Register Birth endpoint',
        color: 'red',
        sidebar: false,
        roles: ['3', '2', '1']
    },

    {
        name: 'Register Death',
        component: Death,
        url: '/register/death',
        icon: 'circle-08',
        comments: 'Register Death endpoint',
        color: 'green',
        sidebar: false,
        roles: ['3', '2', '1']
    },

    {
        name: 'View Registered',
        component: ViewPersons,
        url: '/view/registered',
        icon: 'book-bookmark',
        comments: 'View registered endpoint',
        color: 'blue',
        sidebar: true,
        roles: ['3', '2', '1']
    },
    {
        name: 'View Married',
        component: ViewMarried,
        url: '/view/married',
        icon: 'tie-bow',
        comments: 'View registered endpoint',
        color: 'green',
        sidebar: true,
        roles: ['3', '2', '1']
    },
    {
        name: 'View Deaths',
        component: ViewDeaths,
        url: '/view/deaths',
        icon: 'diamond',
        comments: 'View registered endpoint',
        color: 'red',
        sidebar: true,
        roles: ['3', '2', '1']
    },
    {
        name: 'View Registered',
        component: PersonProfile,
        url: '/person/:id',
        comments: 'View registered endpoint',
        sidebar: false,
        roles: ['3', '2', '1']
    },
    {
        name: 'Users',
        component: Users,
        url: '/register/user',
        icon: 'circle-08',
        comments: 'View registered endpoint',
        color: 'black',
        sidebar: true,
        roles: ['3', '2', '1']
    },
    // {
    //     name: 'Contact',
    //     component: Contact,
    //     url: '/register/contact',
    //     icon: 'circle-08',
    //     comments: 'View registered endpoint',
    //     color: 'black',
    //     sidebar: true,
    //     roles: ['3', '2', '1']
    // },

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

// const misc = [
//     {
//         name: 'Profile',
//         url: '/profile',
//         icon: 'single-02',
//         color: 'primary',
//         component: <>Register</>
//     },
//     {
//         name: 'Settings',
//         url: '/settings',
//         icon: 'settings',
//         color: 'default',
//         component: <>Register</>
//     }
// ]

const openRoutes = [
    {
        name: 'login',
        url: '/auth',
        component: AuthCheck,
    },
    {
        name: 'Register',
        url: '/register',
        component: Register,
    },
]

export { openRoutes }

export default routes