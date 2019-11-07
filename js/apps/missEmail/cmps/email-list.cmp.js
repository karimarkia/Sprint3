'use strict'

import emailPreview from './email-preview.cmp.js';

export default {
    name: 'email-list',
    props: ['emails'],
    template: `
        <section class="body-component">
            <ul class="email-list flex-col">
                <email-preview :email="currEmail" v-if="emails" v-for="(currEmail, idx) in emails" :key="currEmail.id"></email-preview> 
            </ul>
        </section>
        `,
    methods: {
        selectEmail(emailId) {

            this.$emit('selected', emailId);
        }
    },
    components: {
        emailPreview
    },
    data() {
        return {
            currEmail: null,
        }
    }
}