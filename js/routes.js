'use strict'

import home from './cmps/home.cmp.js';
import appHeader from './cmps/app-header.cmp.js';

import missEmail from './apps/missEmail/pages/emailApp.js';
// import missEmailHeader from './apps/missEmail/cmps/email-header.cmp.js';
// import missEmailNav from './apps/missEmail/cmps/email-nav.cmp.js';
import emailListInbox from './apps/missEmail/cmps/email-list-inbox.cmp.js';
import emailListstarred from './apps/missEmail/cmps/email-list-starred.cmp.js';
import emailListsent from './apps/missEmail/cmps/email-list-sent.cmp.js';
import emailListdeleted from './apps/missEmail/cmps/email-list-deleted.cmp.js';
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
                component: emailListInbox
            },
            {
                path: 'starred',
                component: emailListstarred
            },
            {
                path: 'sent',
                component: emailListsent
            },
            {
                path: 'deleted',
                component: emailListdeleted
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