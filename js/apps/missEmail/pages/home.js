'use strict'

export default {
    name: 'missEmailHome',
    template: `
        <section class="missEmailHome" >
        <p class="welcome">{{appTitle}}</p>
        </section>
    `,
    data() {
        return {
            appTitle: 'This is the Ms.Email landing page',
        }
    },
}