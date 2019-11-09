'use strict'

export default {
    name: 'emails-nav-said-bar',
    template: `
        <section class="nav-side-bar flex-col">
            <router-link to="/missEmail/emailList" class="nav-item fa">&#xf01c; Inbox</router-link>
            <router-link to="/missEmail/starred" class="nav-item fa">&#xf006; Starred</router-link>
            <router-link to="/missEmail/sent" class="nav-item fa">&#xf1d8; Sent</router-link>
            <router-link to="/missEmail/deleted" class="nav-item fa">&#xf1f8; Deleted</router-link>
        </section>
    `,
    data() {
        return {
            // appTitle: 'This is the Navigation Pane',
        }
    }
}