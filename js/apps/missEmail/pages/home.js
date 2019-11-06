'use strict'

import { emailService } from '../services/email-service.js';
import '../../../services/event-bus-service.js'
// import theRouter from '../../../routes.js'

import missEmailHeader from '../cmps/email-header.cmp.js';
import missEmailNav from '../cmps/email-nav.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import missEmailList from '../cmps/email-list.cmp.js';
import emailDetails from '../cmps/email-details.cmp.js';
import emailPreview from '../cmps/email-preview.cmp.js';


export default {
    name: 'missEmailHome',
    template: `
        <section class="missEmailHome" >
            <missEmailHeader></missEmailHeader>
            <email-filter @filtered="setFilter"></email-filter>
            <div class="flex">
                <missEmailNav></missEmailNav>
                <missEmailList v-if="!isDetailsUp" :emails="emailsToShow" @selected="selectEmail" @switchEmailDetails="getAdjacentEmail(email)"></missEmailList>
                <emailDetails v-if="isDetailsUp" :email="this.selectedEmail" @closeDetails="closeDetails" @switchEmailDetails="getAdjacentEmail"></emailDetails>
            </div>
        </section>
        `,
    // template: `
    //     <section class="missEmailHome" >
    //         <missEmailHeader></missEmailHeader>
    //         <div class="flex">
    //             <missEmailNav></missEmailNav>
    //             <router-view></router-view>
    //         </div>
    //     </section>
    //     `,
    data() {
        return {
            emails: [],
            email: null,
            selectedEmailId: null,
            filterBy: null,
            isDetailsUp: false,
            selectedEmail: null,
        }
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy
        },
        selectEmail(emailId) {
            let email = emailService.getEmailById(emailId)
                .then(email => {
                    this.selectedEmail = email;
                    this.isDetailsUp = true;
                })
        },
        closeDetails() {
            this.isDetailsUp = false;
        },
        getAdjacentEmail(email) {
            this.selectedEmail = email;
            console.log('home got this email: ', email)
            console.log('the email to switch to is: ', this.selectedEmail)
        }
    },
    computed: {
        emailsToShow() {
            // console.log('emailsToShow is sending this: ', this.emails)
            return this.emails
                // if (!this.filterBy) return this.emails;
                // return this.emails.filter(email => {
                //     console.log('the current email subject is:', email.subject)
                //     email.subject.includes(this.filterBy.subject)

            // })
        }
    },
    created() {
        emailService.getEmails()
            .then(emails => {
                this.emails = emails
            })
            // this.$router.push('/missEmail/emailList')
    },
    components: {
        missEmailHeader,
        missEmailNav,
        missEmailList,
        emailFilter,
        emailDetails,
        emailPreview,
    }
}