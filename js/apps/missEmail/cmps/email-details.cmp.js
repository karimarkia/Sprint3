'use strict'

import { emailService } from '../services/email-service.js';
import { eventBus } from '../../../services/event-bus-service.js';

export default {
    name: 'emailDetails',
    // props: ['email'],
    template: `
            <section class="email-details-container flex-col">  
            <h1>details</h1>
                <div class="flex">
                    <div class="email-details flex-col">
                        <h3>{{this.currEmail.from}}</h3>
                        <h3>{{this.currEmail.to}}</h3>
                        <h1 class="underlined">{{this.currEmail.subject}}</h1>
                    </div>
                </div>
                <div class="email-body">
                    <span class="bold">Description: </span>{{this.currEmail.body}}
                </div>
                <button @click="deleteEmail(currEmail.id)">Delete</button>
                <button @click="closeDetails">CLOSE</button>
            </section>
            `,
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
            // console.log('started loading the details page')
            // debugger
            // this.currEmail = this.email
            // console.log('the data is: ', this.currEmail)
            let emailId = this.currEmail.id;
            console.log('the current email ID is:', emailId)
                // this.nextEmailId = emailService.getPrevNextEmailId(emailId, 'next');
                // console.log('the next email ID is: ', this.nextEmailId)
                // this.prevEmailId = emailService.getPrevNextEmailId(emailId, 'prev');
                // console.log('the prev email ID is: ', this.prevEmailId)
                // emailService.getEmailById(emailId)
                //     .then(email => {
                //         this.currEmail = email;
                //     })
        },
        deleteEmail(emailId) {
            emailService.deleteEmail(this.currEmail.id)
                .then(() => {
                    const msg = {
                        txt: `The email has been deleted succefully (${emailId})`,
                        type: 'success'
                    }
                    eventBus.$emit('show-msg', msg);
                })
        },
        closeDetails() {
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
        // console.log('got into the emailDetails', emailId)
        emailService.getEmailById(+emailId)
            .then(email => {
                // console.log('the gotten email is: ', email)
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
    // watch: {
    //     '' () {
    //         this.loadEmail();
    //     }
    // }
}