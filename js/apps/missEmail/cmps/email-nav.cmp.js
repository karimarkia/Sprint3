'use strict'

export default {
    name: 'emails-nav',
    template: `
        <section class="nav-component flex-col">
            <button>Inbox</button>
            <button>Starred</button>
            <button>Sent</button>
        </section>
    `,
    data() {
        return {
            appTitle: 'This is the Navigation Pane',
        }
    }
}