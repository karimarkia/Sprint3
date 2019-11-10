'use strict'

export default {
    name: 'my-vision',
    template: `
        <section class="myVision" >
        <p class="welcome">{{appTitle}}</p>
        <img class="me-pic" src="/img/blurry.jpg" alt="" />
        </section>
    `,
    data() {
        return {
            appTitle: 'This is my vision',
        }
    },
}