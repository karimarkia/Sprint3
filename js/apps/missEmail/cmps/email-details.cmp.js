'use strict'

import { emailService } from '../services/email-service.js';
import notesService from '../../missKeep/services/keep-service.js';
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
                <div class="flex spread">
                    <div class="flex end">
                        <img class="compose-commands" :src="starType" alt="" /> 
                        <img class="compose-commands" @click="markAsUnread(currEmail.id)" src="/img/unread.png" alt="" title="Mark As Unread"/> 
                        <img class="compose-commands" @click="sendToNotes(currEmail)" src="/img/keepApp.png" title="Send To Notes" />
                    </div>
                    <div class="flex end">
                        <img class="compose-commands" @click="deleteEmail(currEmail.id)" :src="trashType" alt="" />
                        <img class="compose-commands" @click="closeDetails" src="/img/back.png" alt="" />
                    </div>
                </div>
            </section>
            `,
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
        },
        deleteEmail(emailId) {
            emailService.modifyEmailProperty(this.currEmail.id, 'isDeleted')
                .then(() => {
                    const msg = {
                        txt: `The email has been deleted or restored successfully (email ID: '${emailId}')`,
                        type: 'success'
                    }
                    eventBus.$emit('show-msg', msg);
                    const msg2 = {
                        txt: 'the stats have been updated!',
                        type: 'success'
                    }
                    eventBus.$emit('updateStats', msg2);
                    this.$router.push('emailList');
                })
        },
        markAsUnread(emailId) {
            emailService.modifyEmailProperty(this.currEmail.id, 'isUnread')
                .then(() => {
                    const msg = {
                        txt: `The email has been marked as unread (email ID: '${emailId}')`,
                        type: 'success'
                    }
                    eventBus.$emit('show-msg', msg);
                    const msg2 = {
                        txt: 'the stats have been updated!',
                        type: 'success'
                    }
                    eventBus.$emit('updateStats', msg2);
                })
        },
        sendToNotes(email) {
            let newNote = notesService.emptyNote()
            newNote.text.headline = email.subject;
            newNote.text.body = email.body;
            notesService.addNote(newNote);
            const msg = {
                txt: `email with ID: '${email.id}' has been made into a note.`,
                type: 'success'
            }
            eventBus.$emit('show-msg', msg);
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
    computed: {
        trashType() {
            if (this.currEmail.isDeleted === false) return '/img/delete.png';
            if (this.currEmail.isDeleted === true) return '/img/undelete.png';
        },
        starType() {
            if (this.currEmail.isStarred === false) return '/img/notstar.png';
            if (this.currEmail.isStarred === true) return '/img/star.png';
        }
    },
    components: {},
    created() {
        const emailId = this.$route.params.id;
        emailService.modifyEmailProperty(emailId, 'isRead')
            .then(email => {
                this.currEmail = email;
                const msg = {
                    txt: 'the stats have been updated!',
                    type: 'success'
                }
                eventBus.$emit('updateStats', msg);
                this.loadEmail();
            })
    },
    watch: {
        '$route.params.id' () {
            this.$router.push('/missEmail/emailList')
        }
    }
}