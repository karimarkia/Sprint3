'use strict'

import home from './cmps/home.cmp.js';
import appHeader from './cmps/app-header.cmp.js';

import missEmail from './apps/missEmail/pages/emailApp.js';
import missEmailHeader from './apps/missEmail/cmps/email-header.cmp.js';
import missEmailNav from './apps/missEmail/cmps/email-nav.cmp.js';
import emailList from './apps/missEmail/cmps/email-list.cmp.js';
import starredEmailList from './apps/missEmail/cmps/starred-email-list.cmp.js';
import sentEmailList from './apps/missEmail/cmps/sent-email-list.cmp.js';
import deletedEmailList from './apps/missEmail/cmps/deleted-email-list.cmp.js';
import emailDetails from './apps/missEmail/cmps/email-details.cmp.js';
import emailCompose from './apps/missEmail/cmps/email-compose.cmp.js';

import missKeep from './apps/missKeep/pages/home.js';
import missBooks from './apps/missBooks/pages/main.js';


const myRoutes = [{
        path: '/',
        component: home
    },
    {
        path: '/missEmail',
        component: missEmail,
        children: [{
                path: 'emailList',
                component: emailList
            },
            {
                path: 'starred',
                component: starredEmailList
            },
            {
                path: 'sent',
                component: sentEmailList
            },
            {
                path: 'deleted',
                component: deletedEmailList
            },
            {
                path: 'emailCompose',
                component: emailCompose
            },
            {
                path: 'emailDetails/:id',
                component: emailDetails
            }
        ]
    },
    // {
    //     path: '/missKeep',
    //     component: missKeep
    // },
    {
        path: '/missBooks',
        component: missBooks
    },
]

const myRouter = new VueRouter({ routes: myRoutes })

export default myRouter;