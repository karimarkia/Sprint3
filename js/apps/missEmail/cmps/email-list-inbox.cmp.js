'use strict'

import utilService from '../../../services/util-service.js'
import emailPreviewHeader from './email-preview-header.cmp.js';
import emailPreview from './email-preview.cmp.js';

export default {
    name: 'email-list-inbox',
    props: ['emails', 'folder'],
    template: `
        <section class="body-component">
            <ul class="email-list flex-col">
                <email-preview-header></email-preview-header>
                <email-preview :email="currEmail" v-if="currEmails" v-for="(currEmail, idx) in emailsToShow" :key="currEmail.id"></email-preview> 
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
            currEmail: null,
        }
    },
    computed: {
        emailsToShow() {
            this.currEmails = this.emails;
            return this.currEmails.filter(email =>
                email.isDeleted === false
            )

            //////////////////////////////////////////////////////////////////
            ///////// for consolidating all folder pages into one   //////////

            // if (this.folder === 'inbox') {
            //     this.currEmails = this.emails;
            //     return this.currEmails.filter(email =>
            //         email.isDeleted === false
            //     )
            // }
            // if (this.folder === 'starred') {
            //     this.currEmails = this.emails;
            //     return this.emails.filter(email =>
            //         email.isStarred === true
            //     )
            // }
            // if (this.folder === 'sent') {
            //     this.currEmails = this.emails;
            //     return this.emails.filter(email =>
            //         email.isSentByMe === true
            //     )
            // }
            // if (this.folder === 'deleted') {
            //     this.currEmails = this.emails;
            //     return this.emails.filter(email =>
            //         email.isDeleted === true
            //     )
            // }

            ///////////////////////////////////////////////////////////////////
        }

    },
    created() {
        // console.log('emailApp: this is the var pushed by the routerlink: ', this.folder)
        eventBus.$on('setSort', (msg) => {
            this.currEmails = utilService.setSort(this.emails, msg.data)
        })
    }
}