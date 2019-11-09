'use strict'

import { emailService } from '../services/email-service.js';

import { eventBus } from '../../../services/event-bus-service.js'
import emailNav from '../cmps/email-nav.cmp.js';
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
                    <emailNav></emailNav>
                    percent read: {{showStatsPercentage}}
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
                string: '',
                isRead: null
            },
            stats: {
                total: null,
                read: null,
                unread: null
            },
            isDetailsUp: false,
            selectedEmail: null,
            isComposing: false
        }
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy
            console.log('got filter, isRead?', this.filterBy.isRead);

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
            this.isComposing = true;
        },
        getAdjacentEmail(email) {
            this.selectedEmail = email;
            console.log('home got this email: ', email)
            console.log('the email to switch to is: ', this.selectedEmail)
        },
        updateStats() {
            emailService.getEmailStats()
                .then(stats => {
                    this.stats.read = stats.read;
                    this.stats.total = stats.total;
                    this.stats.unread = stats.unread
                })
        }
    },
    computed: {
        emailsToShow() {
            // if (!this.filterBy.string.length) return this.emails;
            if (this.filterBy.isRead) {
                return this.emails.filter(email => {
                    return (!email.isRead)
                })
            }
            return this.emails.filter(email => {
                let searchStr = this.filterBy.string.toLowerCase()
                return email.subject.toLowerCase().includes(searchStr) ||
                    email.to.toLowerCase().includes(searchStr) ||
                    email.from.toLowerCase().includes(searchStr)
            })
        },
        showStatsPercentage() {
            return parseInt((this.stats.read / this.stats.total) * 100) + '%'
        }
    },
    created() {
        emailService.getEmails()
            .then(emails => {
                this.emails = emails
            })
        eventBus.$on('emailSent', (msg) => {
            // console.log('UserMsg got new Msg!', msg.txt);
            this.isComposing = false
        })
        eventBus.$on('newEmailDiscarded', (msg) => {
            // console.log('UserMsg got new Msg!', msg.txt);
            this.isComposing = false
        })
        eventBus.$on('updateStats', (msg) => {
            // console.log('UserMsg got new Msg!', msg.txt);
            this.updateStats()
        })
        this.updateStats();
    },
    components: {
        emailNav,
        emailFilter,
        emailDetails,
        emailPreview,
        emailCompose
    },
}