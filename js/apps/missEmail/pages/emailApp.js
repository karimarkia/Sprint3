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
import emailCompose from '../cmps/email-compose.cmp.js';


export default {
    name: 'emailApp',
    template: `
        <section class="missEmailApp">
            <div class="flex">
                <div class="email-side-nav flex-col">
                    <router-link to="/missEmail/emailCompose"><img class="compose-commands" src="/img/newemail.png" alt="" /></router-link>
                    <router-link to="/missEmail/emailList" class="nav-item fa">&#xf01c; Inbox</router-link>
                    <router-link to="/missEmail/starred" class="nav-item fa">&#xf006; Starred</router-link>
                    <router-link to="/missEmail/sent" class="nav-item fa">&#xf1d8; Sent</router-link>
                    <router-link to="/missEmail/deleted" class="nav-item fa">&#xf1f8; Deleted</router-link>
                </div>
                <div class="emailApp-main flex-col">
                    <email-filter class="flex" @filtered="setFilter"></email-filter>
                    <router-view class="emailApp" :emails="emailsToShow"></router-view>
                </div>
            </div>
        </section>
        `,
    data() {
        return {
            emails: [],
            email: null,
            selectedEmailId: null,
            filterBy: {
                subject: ''
            },
            isDetailsUp: false,
            selectedEmail: null,
        }
    },
    methods: {
        setFilter(filterBy) {
            console.log('getting a change in the filter', filterBy);
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
            if (!this.filterBy.subject.length) return this.emails;
            return this.emails.filter(email =>
                email.subject.includes(this.filterBy.subject)
            )
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
        emailCompose
    },
}