'use strict'

import home from './cmps/home.cmp.js';
import appHeader from './cmps/app-header.cmp.js';
import missEmail from './apps/missEmail/pages/home.js';
import missKeep from './apps/missKeep/pages/home.js';
import missBooks from './apps/missBooks/pages/home.js';
// import myLife from './cmps/my-life.cmp.js';
// import myVision from './cmps/my-vision.cmp.js';
// import bookDetails from './cmps/book-details.cmp.js';

const myRoutes = [{
        path: '/',
        component: home
    },
    // {
    //     path: '/about',
    //     component: about,
    //     children: [{
    //             path: 'myLife',
    //             component: myLife
    //         },
    //         {
    //             path: 'myVision',
    //             component: myVision
    //         }

    //     ]
    // },
    {
        path: '/',
        component: appHeader
    },
    {
        path: '/home',
        component: home
    },
    {
        path: '/missEmail',
        component: missEmail
    },
    {
        path: '/missKeep',
        component: missKeep
    },
    {
        path: '/missBooks',
        component: missBooks
    },
]

const myRouter = new VueRouter({ routes: myRoutes })

export default myRouter;