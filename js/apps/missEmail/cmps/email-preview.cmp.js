'use strict'

import { emailService } from '../services/email-service.js';

export default {
    name: 'email-preview',
    props: ['email'],
    template: `
            <li v-if="email" class="email clean">
                {{email.subject}}
                {{email.from}}
                {{email.sentAt}}
                <button @click="selectEmail(email.id)">Expand</button>
            </li>
            `,
    methods: {
        selectEmail(emailId) {
            // eventBus.$emit('show-msg', msg);
            this.$emit('selected', emailId)
        }
    },
    computed: {},
}