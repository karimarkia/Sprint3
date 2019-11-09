'use strict'

export default {
    name: 'emails-nav-side-bar',
    template: `
        <section class="email-side-nav-button-container flex-col">
            <router-link to="/missEmail/emailList" class="nav-item fa">&#xf01c; Inbox</router-link>
            <router-link to="/missEmail/starred" class="nav-item fa">&#xf006; Starred</router-link>
            <router-link to="/missEmail/sent" class="nav-item fa">&#xf1d8; Sent</router-link>
            <router-link to="/missEmail/deleted" class="nav-item fa">&#xf1f8; Deleted</router-link>
        </section>
    `,

    ////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////// for consolidating all folder pages into one   ////////////////////////

    // <router-link :to="{name: 'list', params: { folder: 'inbox' } }">testINBOX</router-link>
    // <router-link :to="{name: 'list', params: { folder: 'starred' } }">testSTARRED</router-link>
    // <router-link :to="{name: 'list', params: { folder: 'sent' } }">testSENT</router-link>
    // <router-link :to="{name: 'list', params: { folder: 'deleted' } }">testDELETED</router-link>

    /////////////////////////////////////////////////////////////////////////////////////////////

    data() {
        return {}
    },
    methods: {},

}