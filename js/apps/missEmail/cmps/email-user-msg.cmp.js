'use strict'

import { eventBus } from '../../../services/event-bus-service.js';

export default {
    template: `
        <section class="email-user-msg">
            <div class="email-preview-header flex">
                Status:<span class="animated fadeIn" v-if="msg">{{msg.txt}}</span>     
            </div>
        </section>
    `,
    data() {
        return {
            msg: null
        }
    },
    created() {
        eventBus.$on('show-msg', (msg) => {
            this.msg = msg;
            setTimeout(() => {
                this.msg = null;
            }, 3000)
        })
    },
}