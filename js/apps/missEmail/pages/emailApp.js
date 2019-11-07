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
    name: 'emailApp',
    template: `
        <section class="missEmailHome" >
            <email-filter @filtered="setFilter"></email-filter>
            <div class="flex">
                <router-link to="/missEmail/emailList">Inbox</router-link>
                <router-view class="emailApp" :emails="emailsToShow"></router-view>
                </div>
        </section>
        `,
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
            console.log('the emailID is: ', emailId)
            let email = emailService.getEmailById(emailId)
                .then(email => {
                    this.selectedEmail = email;
                    this.isDetailsUp = true;
                    console.log('the email is: ', this.selectedEmail = email)
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