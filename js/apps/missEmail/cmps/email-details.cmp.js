'use strict'

import { emailService } from '../services/email-service.js';
import { eventBus } from '../../../services/event-bus-service.js';

export default {
    name: 'emailDetails',
    template: `
            <section v-if="currEmail" class="email-details-container flex-col">  
                <div class="flex">
                    <div class="email-details flex-col">
                        <h3>From: {{this.currEmail.from}}</h3>
                        <h3>To: {{this.currEmail.to}}</h3>
                        <h1>Subject: <span class="underlined">{{this.currEmail.subject}}</span></h1>
                    </div>
                </div>
                <div class="email-body">
                    <p>{{this.currEmail.body}}</p>
                </div>
                <div class="flex end">
                    <img class="compose-commands" @click="deleteEmail(currEmail.id)" src="/img/delete.png" alt="" />
                    <img class="compose-commands" @click="closeDetails" src="/img/back.png" alt="" />
                </div>
            </section>
            `,
    // <router-link :to="emailList">details</router-link>
    // <button @click="closeDetails">CLOSE</button>
    // <div class="pagination flex end">
    //     <button @click="getAdjacentEmail('prev')">Prev Email</button>
    //     <button @click="getAdjacentEmail('next')">Next Email</button>
    // </div>
    data() {
        return {
            email: null,
            currEmail: null,
            nextEmailId: null,
            prevEmailId: null
        }
    },
    methods: {
        loadEmail() {
            let emailId = this.currEmail.id;
            this.nextEmailId = emailService.getPrevNextEmailId(emailId, 'next');
            this.prevEmailId = emailService.getPrevNextEmailId(emailId, 'prev');
            // console.log('the current email ID is:', emailId)
            // console.log('the next email ID is: ', this.nextEmailId)
            // console.log('the prev email ID is: ', this.prevEmailId)
        },
        deleteEmail(emailId) {
            //we are no longer really deleting the email...
            emailService.deleteEmail(this.currEmail.id)
                .then(() => {
                    const msg = {
                        txt: `The email has been deleted succefully (${emailId})`,
                        type: 'success'
                    }
                    eventBus.$emit('show-msg', msg);
                    this.$router.push('emailList')
                })
        },
        closeDetails() {
            this.$router.push('emailList')
            this.$emit('closeDetails')
        },
        getAdjacentEmail(direction) {
            let emailId = null;
            if (direction === 'prev') {
                emailId = this.prevEmailId
            }
            if (direction === 'next') {
                emailId = this.nextEmailId
            }
            emailService.getEmailById(emailId)
                .then(email => {
                    console.log('emailDetails is switching to this email: ', email)
                    this.$emit('switchEmailDetails', email)
                })
        }
    },
    computed: {},
    components: {},
    created() {

        const emailId = this.$route.params.id;
        emailService.getEmailById(emailId, 'isRead')
            .then(email => {
                this.currEmail = email;
                this.loadEmail();
            })

        // emailService.getEmailById(id)
        //     .then(res => {
        //         this.currEmail = res;
        //         console.log('the gotten email is: ', res)
        //         this.loadEmail();

        //     })
    },
    watch: {
        '$route.params.id' () {
            // console.log('Route param: "id" changed');
            this.$router.push('/missEmail/emailList')
        }
    }
}