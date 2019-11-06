'use strict'

import { emailService } from '../services/email-service.js';

export default {
    name: 'emailPreview',
    props: ['email'],
    template: `
            <li class="email clean">
                {{this.email.subject}}
                {{this.email.from}}
                {{this.email.sentAt}}
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
    created() {},
}