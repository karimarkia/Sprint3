'use strict'

export default {
    name: 'home',
    template: `
        <section class="home-container">
            <p class="welcome">{{appTitle}}</p>
        </section>
    `,
    data() {
        return {
            appTitle: 'Hi!',
        }
    }
}