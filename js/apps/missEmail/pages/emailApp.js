'use strict'

import {
    emailService
} from '../services/email-service.js';
import {
    eventBus
} from '../../../services/event-bus-service.js'

import emailNav from '../cmps/email-nav.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import emailDetails from '../cmps/email-details.cmp.js';
// import emailPreview from '../cmps/email-preview.cmp.js';
import emailUserMsg from '../cmps/email-user-msg.cmp.js';
// import emailCompose from '../cmps/email-compose.cmp.js';


export default {
    name: 'emailApp',
    // props: ['folder'],
    template: `
        <section class="missEmailApp">
            <div class="body-container flex-col">
                <div class="email-app-body flex">
                    <div class="email-side-nav flex-col">
                        <div class="flex-col">
                            <router-link @click.native="toggleSearch" @doneComposing="toggleSearch" to="/missEmail/emailCompose"><img class="new-email-img" src="/img/newemail.png" alt="" /></router-link>
                            <emailNav></emailNav>
                        </div>
                        <div>
                            <div class="stats">
                                <progress :value="showStatsPercentage" max="100"></progress>
                            </div>
                        </div>    
                    </div>
                    <div class="email-main flex-col">
                        <email-filter v-if="!isComposing" @filtered="setFilter"></email-filter>
                        <router-view class="animated bounceInUp" :emails="emailsToShow" :folder="requestedFolder"></router-view>
                    </div>
                </div>
                <email-user-msg></email-user-msg>
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
            isComposing: false,
            requestedFolder: null,

        }
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy
                // console.log('got filter, isRead?', this.filterBy.isRead);

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
        },



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
            return parseInt((this.stats.read / this.stats.total) * 100)
        }
    },
    created() {
        // console.log('emailApp: this is the var pushed by the routerlink: ', this.$route.params.folder)
        emailService.getEmails()
            .then(emails => {
                this.emails = emails
            })
        eventBus.$on('emailSent', (msg) => {
            this.isComposing = false
        })
        eventBus.$on('newEmailDiscarded', (msg) => {
            this.isComposing = false
        })
        eventBus.$on('updateStats', (msg) => {
            this.updateStats()
        })
        this.updateStats();


    },
    components: {
        emailNav,
        emailFilter,
        emailDetails,
        // emailPreview,
        emailUserMsg,
        // emailCompose
    },



    //////////////////////////////////////////////////////////////////////////////////
    //////////   for consolidating the folder views into a single component  /////////
    // watch: {
    //     '$route.params.folder' () {
    //         console.log('Route param: "folder" changed', this.$route.params.folder);
    //         if (this.$route.params.folder === 'inbox') {
    //             this.requestedFolder = 'inbox'
    //         }
    //         // this.$router.push('/missEmail/emailList')
    //     }
    // }
} ///////////////////////////////////////////////////////////////////////////////////