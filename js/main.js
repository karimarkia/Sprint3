'use strict';


import './services/event-bus-service.js'
import appHeader from './cmps/app-header.cmp.js';
import theRouter from './routes.js'


Vue.config.productionTip = false

var options = {
    router: theRouter,
    name: 'AppSus',
    el: '.app-sus',
    template: `
        <div class="main-container">
            <app-header></app-header>
<<<<<<< HEAD
            <router-view class="body-component"></router-view>
            <div class="footer">
                THIS IS THE FOOTER
            </div>
=======
            <router-view></router-view>
            <!-- <h1>THIS IS THE FOOTER</h1> -->
>>>>>>> b557e12e94aecb167b7fa00503cd81735e5db33f
        </div>
    `,
    // data() {}
    components: {
        appHeader
    }
}

new Vue(options);   