'use strict'

export default {
    name: 'missBooksHome',
    template: `
        <section class="missBooksHome" >
        <p class="welcome">{{appTitle}}</p>
        </section>
    `,
    data() {
        return {
            appTitle: 'This is the Ms.Books landing page',
        }
    },
}