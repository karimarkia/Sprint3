import bookWelcome from './cmps/book-welcome.cmps.js'
import bookAbout from './cmps/book-about.cmps.js'
import bookApp from './cmps/book-app.cmps.js'
import bookDetails from './cmps/book-details.cmps.js'
import reviewApp from './cmps/review-app.cmps.js'



const myRoutes = [{
        path: '/',
        component: bookWelcome
    },
    {
        path: '/about',
        component: bookAbout
    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/book/details/:id',
        component: bookDetails
    },
    {
        path: '/bookReview/:id',
        component: reviewApp
    },

]
const myRouter = new VueRouter({
    routes: myRoutes
})

export default myRouter;