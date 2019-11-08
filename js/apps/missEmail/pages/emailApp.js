'use strict'

import { emailService } from '../services/email-service.js';

import { eventBus } from '../../../services/event-bus-service.js'
// import theRouter from '../../../routes.js'

import missEmailHeader from '../cmps/email-header.cmp.js';
import missEmailNav from '../cmps/email-nav.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import emailDetails from '../cmps/email-details.cmp.js';
import emailPreview from '../cmps/email-preview.cmp.js';
import emailCompose from '../cmps/email-compose.cmp.js';


export default {
    name: 'emailApp',
    template: `
        <section class="missEmailApp">
            <div class="flex">
                <div class="email-side-nav flex-col">
                    <router-link @click.native="toggleSearch" @doneComposing="toggleSearch" to="/missEmail/emailCompose"><img class="compose-commands" src="/img/newemail.png" alt="" /></router-link>
                    <router-link to="/missEmail/emailList" class="nav-item fa">&#xf01c; Inbox</router-link>
                    <router-link to="/missEmail/starred" class="nav-item fa">&#xf006; Starred</router-link>
                    <router-link to="/missEmail/sent" class="nav-item fa">&#xf1d8; Sent</router-link>
                    <router-link to="/missEmail/deleted" class="nav-item fa">&#xf1f8; Deleted</router-link>
                </div>
                <div class="emailApp-main flex-col">
                    <email-filter v-if="!isComposing" class="flex" @filtered="setFilter"></email-filter>
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
                string: ''
            },
            isDetailsUp: false,
            selectedEmail: null,
            isComposing: false
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
        toggleSearch() {
            console.log('the search filter has been toggle on or off');
            this.isComposing = true;
        },
        getAdjacentEmail(email) {
            this.selectedEmail = email;
            console.log('home got this email: ', email)
            console.log('the email to switch to is: ', this.selectedEmail)
        }
    },
    computed: {
        emailsToShow() {
            if (!this.filterBy.string.length) return this.emails;
            return this.emails.filter(email => {
                let searchStr = this.filterBy.string.toLowerCase()
                return email.subject.toLowerCase().includes(searchStr) ||
                    email.to.toLowerCase().includes(searchStr) ||
                    email.from.toLowerCase().includes(searchStr)
            })
        }
    },
    created() {
        emailService.getEmails()
            .then(emails => {
                this.emails = emails
            })
        eventBus.$on('show-msg', (msg) => {
            console.log('UserMsg got new Msg!', msg.txt);
            this.isComposing = false
        })
    },
    components: {
        missEmailHeader,
        missEmailNav,
        emailFilter,
        emailDetails,
        emailPreview,
        emailCompose
    },
}