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
                    <router-link to="/missEmail/emailCompose"><button>Compose</button></router-link>
                    <router-link to="/missEmail/emailList">Inbox</router-link>
                    <router-link to="/missEmail/starred">Starred</router-link>
                    <router-link to="/missEmail/sent">Sent</router-link>
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
            filterBy: null,
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
            return this.emails
                // if (!this.filterBy) return this.emails;
                // return this.emails.filter(email => {
                //     console.log('the current email subject is:', email.subject)
                //     email.subject.includes(this.filterBy.subject)

            // })
        }

        // dogsToShow() {
        //     if (!this.filterBy) return this.dogs;
        //     var regex = new RegExp(`${this.filterBy.name}`, 'i');
        //     return this.dogs.filter(dog => 
        //         // dog.name.toLowerCase().includes(this.filterBy.name.toLowerCase()) && dog.weight >= this.filterBy.minWeight
        //         regex.test(dog.name) && dog.weight >= this.filterBy.minWeight
        //     )
        // }
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