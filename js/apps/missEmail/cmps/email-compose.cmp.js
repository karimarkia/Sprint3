'use strict'

import { emailService } from '../services/email-service.js';
import { eventBus } from '../../../services/event-bus-service.js';

export default {
    name: 'emailCompose',
    // props: ['email'],
    template: `
            <section v-if="newEmail" class="email-compose-container">  
                THIS IS THE EMAIL COMPOSE PAGE
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

        },
        sendEmail() {
            console.log('sending the email');
            emailService.sendEmail(this.newEmail)
                .then(() => {
                    console.log('the email has been sent successfully');
                    this.newEmail = emailService.getEmptyEmail()
                        .then(email => {
                            console.log('after successfully sending the email, here is the new empty email: ', email);
                            this.newEmail = email;
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