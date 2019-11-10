'use strict'

export default {
    name: 'my-life',
    template: `
        <section class="myLife" >
        <p class="welcome">{{appTitle}}</p>
        <img class="me-pic" src="/img/mylife.png" alt="" />
        </section>
    `,
    data() {
        return {
            appTitle: 'This is my life now...',
        }
    },
}