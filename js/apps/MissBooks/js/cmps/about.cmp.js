'use strict'

export default {
    name: 'about',
    template: `
        <section class="about-container">
            <nav>
                <router-link to="/about/myLife">My Life</router-link> |
                <router-link to="/about/myVision">My Vision</router-link> 
            </nav> 
            <p class="welcome">{{appTitle}}</p>
            <img class="me-pic" src="/img/pic.png" alt="" />
            <router-view class="about-internal-component"></router-view>
        </section>
    `,
    data() {
        return {
            appTitle: 'This is the about me page!',
        }
    }
}