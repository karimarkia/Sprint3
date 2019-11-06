'use strict'

export default {
    name: 'appHeader',
    template: `
        <div>
            <h1>Welcome to the AppSus Sprint!</h1>
            <nav>
                <!-- <router-link to="/">Home</router-link> | -->
                <!-- <router-link to="/missEmail">Ms. Email</router-link> | -->
                <router-link to="/missKeep" exact>Ms. Keep</router-link> |
                <!-- <router-link to="/missBooks">Ms. Books</router-link> -->
            </nav>
        </div>
    `
}