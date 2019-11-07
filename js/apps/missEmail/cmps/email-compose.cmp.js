'use strict'

import { emailService } from '../services/email-service.js';
import { eventBus } from '../../../services/event-bus-service.js';

export default {
    name: 'emailCompose',
    template: `
            <section v-if="newEmail" class="email-compose-container flex-col">  
                <form class="email-compose-container" @submit.prevent="sendEmail">
                    <input ref="inputTo" type="text" placeholder="to" v-model="newEmail.to" />
                    <input ref="inputSubject" type="text" placeholder="subject" v-model="newEmail.subject" />
                    <textarea ref="inputEmailBody" placeholder="what do you have to say?" v-model="newEmail.body"></textarea>
                    <button class="btn"><img class="compose-commands" src="/img/send.png" alt="" /></button>
                </form>
                <img class="compose-commands" @click="discardChanges" src="/img/delete.png" alt="" />
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
                this.newEmail = email;
            })
    }
    // mounted() {
    //     console.log(this.$refs);
    //     const inputTo = this.$refs.inputTo;
    //     setTimeOut(() => inputTo.focus(), 0);
    // },
}