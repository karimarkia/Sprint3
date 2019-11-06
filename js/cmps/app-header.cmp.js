'use strict'

export default {
    name: 'appHeader',
    template: `
        <div class="header flex spread">
            <h3>Welcome to the AppSus Sprint!</h3>
            <nav>
                <router-link to="/">Home</router-link> |
                <router-link to="/missEmail">Ms. Email</router-link> |
                <router-link to="/missKeep" exact>Ms. Keep</router-link> |
                <router-link to="/missBooks">Ms. Books</router-link>
            </nav>
        </div>
    `
}