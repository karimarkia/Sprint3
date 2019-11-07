'use strict'

import emailPreview from './email-preview.cmp.js';

export default {
    name: 'emailList',
    props: ['emails'],
    template: `
    <section class="body-component">
        <h1> EMAIL_LIST</h1>
        <ul class="email-list flex-col">
            <router-link v-for="(currEmail, idx) in emails" :key="currEmail.id" :to="'missEmail/' + currEmail.id">
                <email-preview @selected="selectEmail" :email="currEmail"></email-preview>
            </router-link>
        </ul>
    </section>
    `,
    // template: `
    //         <section class="body-component">
    //             <ul class="email-list flex-col">
    //                 <email-preview v-for="(currEmail, idx) in emails" :key="currEmail.id" @selected="selectEmail" :email="currEmail"></email-preview>
    //             </ul>
    //         </section>
    //         `,
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
    created() {
        // console.log('onCreated, the emailList is getting this: ', this.emails);
    },
}