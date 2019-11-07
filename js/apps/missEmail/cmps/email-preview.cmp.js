'use strict'

import { emailService } from '../services/email-service.js';

export default {
    name: 'email-preview',
    props: ['email'],
    template: `
            <li v-if="email" class="email clean">
            <div class="email-item flex-col">
                <div class="flex spread">
                <span class="bold">From: {{email.from}}</span>
                    <button @click="selectEmail(email.id)">Expand</button>
                    <router-link :to="emailURL">details</router-link>

                </div>    
                <div class="flex spread">
                    <div>Subject: {{email.subject}}</div>
                    <div>{{email.sentAt}}</div>
                </div>
            </div>
            </li>
            `,
    methods: {
        selectEmail(emailId) {
            // eventBus.$emit('show-msg', msg);
            this.$emit('selected', emailId)
            this.$router.push('emailDetails/' + emailId)
        }
    },
    computed: {
        emailURL() {
            return 'emailDetails/' + this.email.id
        }
    },
}