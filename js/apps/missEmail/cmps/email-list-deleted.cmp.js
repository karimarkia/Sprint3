'use strict'

import utilService from '../../../services/util-service.js'
import emailPreviewHeader from './email-preview-header.cmp.js';
import emailPreview from './email-preview.cmp.js';

export default {
    name: 'email-list-deleted',
    props: ['emails'],
    template: `
        <section class="body-component">
            <ul class="email-list flex-col">
                <email-preview-header></email-preview-header>
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
        emailPreviewHeader,
        emailPreview
    },
    data() {
        return {
            currEmails: null,
            currEmail: null
        }
    },
    computed: {
        emailsToShow() {
            this.currEmails = this.emails;
            return this.emails.filter(email =>
                email.isDeleted === true
            )
        }
    },
    created() {
        eventBus.$on('setSort', (msg) => {
            this.currEmails = utilService.setSort(this.emails, msg.data)
        })
    }
}