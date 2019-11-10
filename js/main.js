'use strict';


import './services/event-bus-service.js'
import appHeader from './cmps/app-header.cmp.js';
import footerCmp from './cmps/footer-cmp.js';
import theRouter from './routes.js'


Vue.config.productionTip = false

var options = {
    router: theRouter,
    name: 'AppSus',
    el: '.app-sus',
    template: `
        <div class="wrapper flex-col spread">
            <app-header></app-header>
            <router-view></router-view>
            <div>

                <footer-cmp></footer-cmp>
            </div>
        </div>
    `,
    // data() {}
    components: {
        appHeader,
        footerCmp
    }
}

new Vue(options);