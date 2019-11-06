'use strict'

export default {
    name: 'missKeepHome',
    template: `
        <section class="missKeepHome" >
        <p class="welcome">{{appTitle}}</p>
        </section>
    `,
    data() {
        return {
            appTitle: 'This is the Ms.Keep landing page',
        }
    },
}