'use strict'

import home from './cmps/home.cmp.js';
import about from './cmps/about.cmp.js';
import myLife from './cmps/my-life.cmp.js';
import myVision from './cmps/my-vision.cmp.js';
import bookApp from './cmps/book-app.cmp.js';
import addBook from './cmps/add-book.cmp.js';
import bookDetails from './cmps/book-details.cmp.js';

const myRoutes = [{
        path: '/',
        component: home
    },
    {
        path: '/about',
        component: about,
        children: [{
                path: 'myLife',
                component: myLife
            },
            {
                path: 'myVision',
                component: myVision
            }
        ]
    },
    {
        path: '/book',
        component: bookApp
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