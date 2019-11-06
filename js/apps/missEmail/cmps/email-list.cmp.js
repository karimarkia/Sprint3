'use strict'

import emailPreview from './email-preview.cmp.js';

export default {
    name: 'emailList',
    props: ['emails'],
    template: `
            <section class="body-component">
                <ul class="email-list flex-col">
                    <email-preview v-for="(currEmail, idx) in emails" :key="currEmail.id" @selected="selectEmail" :email="currEmail"></email-preview>
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
    },
    created() {},
}