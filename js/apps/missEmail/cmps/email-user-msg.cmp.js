'use strict'

import { eventBus } from '../../../services/event-bus-service.js';

export default {
    template: `
        <section class="user-msg">
            <div class="email-preview-header flex">
                Status: <span v-if="msg">{{msg.txt}}</span>
            </div>
        </section>
    `,
    // <section class="user-msg" :class="msg.type">
    data() {
        return {
            msg: null
        }
    },
    created() {
        eventBus.$on('emailSent', (msg) => {
            this.msg = msg;
            setTimeout(() => {
                this.msg = null;
            }, 3000)
        })
        eventBus.$on('newEmailDiscarded', (msg) => {
                this.msg = msg;
                setTimeout(() => {
                    this.msg = null;
                }, 3000)
            })
            // eventBus.$on('updateStats', (msg) => {
            //     this.msg = msg;
            //     setTimeout(() => {
            //         this.msg = null;
            //     }, 3000)
            // })
        eventBus.$on('show-msg', (msg) => {
            console.log('UserMsg got new Msg!');
            this.msg = msg;
            setTimeout(() => {
                this.msg = null;
            }, 3000)
        })
    },
    methods: {
        // close() {
        //     this.msg = null;
        // }
    }
}