'use strict'

export default {
    name: 'emails-nav',
    template: `
        <section class="nav-component flex-col">
            <router-link to="/missEmail/EmailList">Inbox</router-link>
            
        </section>
    `,
    data() {
        return {
            appTitle: 'This is the Navigation Pane',
        }
    }
}