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
            <router-view class="body-component"></router-view>
            <div class="footer">
                THIS IS THE FOOTER
            </div>
        </div>
    `,
    // data() {}
    components: {
        appHeader
    }
}

new Vue(options);