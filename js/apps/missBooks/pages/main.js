    import appHeader from '../cmps/app-header.cmps.js'
    import theRouter from '../routes.js'
    import '../service/event-bus.service.js'
    import userMsg from '../cmps/user-msg-cmp.js'


    // var options = {
    export default {
        router: theRouter,
        // el: '.my-app',
        template: `
         <section>
            <app-header></app-header>
            
            <router-view></router-view>

            <user-msg></user-msg>
        
            </section>
    `,
        data() {
            return {}

        },
        methods: {

        },
        computed: {

        },
        components: {

            appHeader,
            userMsg

        }


    }

    // new Vue(options);