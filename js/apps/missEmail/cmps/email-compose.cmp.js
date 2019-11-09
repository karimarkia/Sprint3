'use strict'

import { emailService } from '../services/email-service.js';
import { eventBus } from '../../../services/event-bus-service.js';

export default {
    name: 'emailCompose',
    template: `
            <section v-if="newEmail" class="email-compose-container flex-col">  
                <div class="email-compose-title">New Message</div>
                <form @submit.prevent="sendEmail">
                <div class="flex centered">
                    <input class="compose" ref="inputTo" type="text" placeholder="To:" v-model="newEmail.to" required />
                </div>
                <div class="flex centered">
                    <input class="compose" ref="inputSubject" type="text" placeholder="Subject" v-model="newEmail.subject" required />
                </div>
                <div class="flex centered">
                    <textarea ref="inputEmailBody" placeholder="what do you have to say?" v-model="newEmail.body" required></textarea>
                </div>
                <div class="flex spread">
                    <img class="compose-commands" @click="discardChanges" src="/img/delete.png" alt="" />
                    <input type="image" class="compose-commands" src="/img/send.png" alt="Submit">
                </div>
                </form>
                <div class="flex end">
                    
                </div>
            </section>
            `,
    // <span class="email-compose-field">Body:</span>
    // <button class="btn"><img class="compose-commands" src="/img/send.png" alt="" /></button>
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
            const msg = {
                txt: 'changes have been discarded',
                type: 'success'
            }
            eventBus.$emit('newEmailDiscarded', msg);
            console.log('discarded msg has been emitted to the bus');

            this.$router.push('emailList')

        },
        sendEmail() {
            emailService.sendEmail(this.newEmail)
                .then(() => {
                    const msg = {
                        txt: 'The email has been sent succefully',
                        type: 'success'
                    }
                    eventBus.$emit('emailSent', msg);
                    const msg2 = {
                        txt: 'the stats have been updated!',
                        type: 'success'
                    }
                    eventBus.$emit('updateStats', msg2);

                    this.newEmail = emailService.getEmptyEmail()
                        .then(email => {
                            this.newEmail = email;
                            this.$router.push('emailList')
                                // this.$emit('doneComposing');
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