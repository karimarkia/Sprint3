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
                    <img class="compose-commands" @click="discardChanges" src="./img/delete.png" alt="" />
                    <input type="image" class="compose-commands" src="./img/send.png" alt="Submit">
                </div>
                </form>
                <div class="flex end">
                    
                </div>
            </section>
            `,
    data() {
        return {
            newEmail: null,
            to: null
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
            eventBus.$emit('show-msg', msg);
            this.$router.push('emailList')

        },
        sendEmail() {
            emailService.sendEmail(this.newEmail)
                .then(() => {
                    const msg = {
                        txt: `The email has been sent successfully (email ID: '${this.newEmail.id}')`,
                        type: 'success'
                    }
                    eventBus.$emit('show-msg', msg);
                    // const msg2 = {    // if this part is uncommented, it is only the second msg (msg2) that is displayed in the status bar !
                    //     txt: 'the stats have been updated!',
                    //     type: 'success'
                    // }
                    // eventBus.$emit('updateStats', msg2);

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
                console.log('this.newEmail is', this.newEmail);
                if (this.$route.params.subject) {
                    this.newEmail.to = 'myself';
                    this.newEmail.subject = this.$route.params.subject;
                    this.newEmail.body = this.$route.params.body;
                }

            })
    },
}
