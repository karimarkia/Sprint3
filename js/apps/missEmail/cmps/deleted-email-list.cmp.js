'use strict'

import emailPreview from './email-preview.cmp.js';

export default {
    name: 'deleted-email-list',
    props: ['emails'],
    template: `
        <section class="body-component">
            <ul class="email-list flex-col">
                <email-preview :email="currEmail" v-if="emails" v-for="(currEmail, idx) in emailsToShow" :key="currEmail.id"></email-preview> 
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
            starredEmails: null
        }
    },
    computed: {
        emailsToShow() {
            return this.emails.filter(email =>
                email.isDeleted === true
            )
        }
    },
}