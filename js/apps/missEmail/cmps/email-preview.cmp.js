'use strict'

import { emailService } from '../services/email-service.js';

export default {
    name: 'email-preview',
    props: ['email'],
    template: `
            <router-link :to="emailURL"><li v-if="email" class="email clean">
                <div class="email-item flex-col">
                    <div class="flex spread">
                    <span :class="{bold: !email.isRead}">From: {{email.from}}</span>
                    <button>Details</button>
                    </div>    
                    <div class="flex spread">
                        <div>Subject: {{email.subject}}</div>
                        <div>{{email.sentAt}}</div>
                    </div>
                </div>
            </li></router-link>
            `,
    // <button @click="selectEmail(email.id)">Expand</button>
    methods: {
        selectEmail(emailId) {
            // eventBus.$emit('show-msg', msg);
            // this.$emit('selected', emailId)
            this.$router.push('emailDetails/' + emailId)
        }
    },
    computed: {
        emailURL() {
            return 'emailDetails/' + this.email.id
        }
    },
}