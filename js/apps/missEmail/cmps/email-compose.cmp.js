'use strict'

import { emailService } from '../services/email-service.js';
import { eventBus } from '../../../services/event-bus-service.js';

export default {
    name: 'emailCompose',
    // props: ['email'],
    template: `
            <section v-if="newEmail" class="email-compose-container">  
                <form class="email-compose-container" @submit.prevent="sendEmail">
                    <input ref="to" type="text" placeholder="to" v-model="newEmail.to" />
                    <input ref="subject" type="text" placeholder="subject" v-model="newEmail.subject" />
                    <textarea ref="emailBody" placeholder="what do you have to say?" v-model="newEmail.body"></textarea>
                    <button>Send</button>
                </form>
                <button @click="discardChanges">Discard</button>
            </section>
            `,
    data() {
        return {
            newEmail: null,
            to: null,
            subject: null

        }
    },
    methods: {
        discardChanges() {
            console.log('discarding your changes');
            this.newEmail = null;
            this.to = null;
            this.subject = null;
            this.$router.push('emailList')

        },
        sendEmail() {
            emailService.sendEmail(this.newEmail)
                .then(() => {
                    const msg = {
                        txt: `The email has been sent succefully' (${this.newEmail.id})'`,
                        type: 'success'
                    }
                    eventBus.$emit('show-msg', msg);
                    this.newEmail = emailService.getEmptyEmail()
                        .then(email => {
                            this.newEmail = email;
                            this.$router.push('emailList')
                        })
                })
        },

    },
    created() {
        emailService.getEmptyEmail()
            .then(email => {
                console.log('the empty email received from emailService is: ', email);
                this.newEmail = email;
            })
    }
}