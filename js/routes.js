'use strict'

import home from './cmps/home.cmp.js';
import appHeader from './cmps/app-header.cmp.js';
// import missEmail from './apps/missEmail/pages/home.js';
// // import missKeep from './apps/missKeep/pages/home.js';
import missKeep from './apps/missKeep/cmps/keep-main.js';
// import missBooks from './apps/missBooks/pages/home.js';


const myRoutes = [{
        path: '/',
        component: home
    },
    {
        path: '/',
        component: appHeader
    },
    {
        path: '/home',
        component: home
    },
    // {
    //     path: '/missEmail',
    //     component: missEmail
    // },
    {
        path: '/missKeep',
        component: missKeep
    },
    // {
    //     path: '/missBooks',
    //     component: missBooks
    // },
]

const myRouter = new VueRouter({ routes: myRoutes })

export default myRouter;