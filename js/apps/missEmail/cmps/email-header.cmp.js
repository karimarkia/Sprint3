'use strict'

export default {
    name: 'emails-header',
    template: `
        <section class="header-component">
            <p class="welcome">{{appTitle}}</p>
        </section>
    `,
    data() {
        return {
            appTitle: 'This is the header Pane',
        }
    }
}