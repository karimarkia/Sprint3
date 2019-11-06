'use strict'

import home from './cmps/home.cmp.js';
import appHeader from './cmps/app-header.cmp.js';
<<<<<<< HEAD

import missEmail from './apps/missEmail/pages/home.js';
import missEmailHeader from './apps/missEmail/cmps/email-header.cmp.js';
import missEmailNav from './apps/missEmail/cmps/email-nav.cmp.js';
import missEmailList from './apps/missEmail/cmps/email-list.cmp.js';
import missEmailDetails from './apps/missEmail/cmps/email-details.cmp.js';

import missKeep from './apps/missKeep/pages/home.js';
import missBooks from './apps/missBooks/pages/home.js';


const myRoutes = [{
=======
// import missEmail from './apps/missEmail/pages/home.js';
// // import missKeep from './apps/missKeep/pages/home.js';
import missKeep from './apps/missKeep/cmps/keep-main.js';
// import missBooks from './apps/missBooks/pages/home.js';


const myRoutes = [{
        path: '/',
        component: home
    },
    {
>>>>>>> b557e12e94aecb167b7fa00503cd81735e5db33f
        path: '/',
        component: home
    },
<<<<<<< HEAD
    {
        path: '/missEmail',
        component: missEmail,
        // children: [{
        //         path: 'emailList',
        //         component: missEmailList
        //     },
        //     {
        //         path: 'emailDeatils',
        //         component: missEmailDetails
        //     }
        // ]
    },
=======
    // {
    //     path: '/missEmail',
    //     component: missEmail
    // },
>>>>>>> b557e12e94aecb167b7fa00503cd81735e5db33f
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