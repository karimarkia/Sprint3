'use strict'

import home from './cmps/home.cmp.js';

import missEmail from './apps/missEmail/pages/emailApp.js';
import emailListInbox from './apps/missEmail/cmps/email-list-inbox.cmp.js';
import emailListstarred from './apps/missEmail/cmps/email-list-starred.cmp.js';
import emailListsent from './apps/missEmail/cmps/email-list-sent.cmp.js';
import emailListdeleted from './apps/missEmail/cmps/email-list-deleted.cmp.js';
import emailDetails from './apps/missEmail/cmps/email-details.cmp.js';
import emailCompose from './apps/missEmail/cmps/email-compose.cmp.js';

import missKeep from './apps/missKeep/cmps/keep-main.js';

import missBooks from './apps/MissBooks/js/main.js';
import bookDetails from './apps/missBooks/js/cmps/book-details.cmp.js'
import addBook from './apps/MissBooks/js/cmps/add-book.cmp.js'


const myRoutes = [{
        path: '/',
        component: home
    },
    {
        path: '/missEmail',
        component: missEmail,
        children: [{
                path: 'emailList',
                name: 'list',
                props: true,
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
                name: 'compose',
                component: emailCompose
            },
            {
                path: 'emailDetails/:id',
                component: emailDetails
            }
        ]
    },
    {
        path: '/missKeep',
        component: missKeep
    },
    {
        path: '/missBooks',
        component: missBooks
    },
    {
        path: '/addBook',
        component: addBook
    },
    {
        path: '/book/:id',
        component: bookDetails
    }
]

const myRouter = new VueRouter({ routes: myRoutes })

export default myRouter;