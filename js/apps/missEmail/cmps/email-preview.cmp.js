'use strict'

import { emailService } from '../services/email-service.js';

export default {
    name: 'email-preview',
    props: ['email'],
    template: `
            <section @click.stop="extendPreview">
                <li v-if="email" class="email clean">
                    <div :class="{'extended-preview': isExtendPreview}" class="short-preview flex-col">
                        <div v-if="!isExtendPreview" class="short-preview flex">
                            <div class="email-preview-icons flex">
                                <img class="preview-commands" :src="readType" alt="" />
                                <img class="preview-commands" @click.stop="makeStarred(email.id)" :src="starType" alt="" />
                            </div>
                            <div class="email-preview-txt flex spread"> 
                                <div :class="{bold: !email.isRead}">{{email.from}}</div>
                                <div>{{email.subject}}</div>
                                <div class="email-preview-arrivedAt">{{email.sentAt}}</div>
                            </div>
                        </div>
                        <div v-if="isExtendPreview" classs="flex-col">
                            <div class="flex spread">
                                <div class="large-subject">{{email.subject}}</div>
                                <div class="flex">
                                    <img class="preview-commands" @click="deleteEmail(email.id)" :src="trashType" alt="" />
                                    <router-link :to="emailURL"><img class="preview-commands" src="/img/preview-details.png" alt="" /></router-link>
                                </div>
                            </div>   
                            <div>{{email.from}}</div>
                            <div>{{shortBody}}</div>
                        </div>
                    </div>
                </li>
            </section>
            `,
    // <button @click="selectEmail(email.id)">Expand</button>
    data() {
        return {
            isExtendPreview: false,
            isStarred: false
        }
    },
    methods: {
        extendPreview() {
            this.isExtendPreview = !this.isExtendPreview
        },
        makeStarred() {
            emailService.modifyEmailProperty(this.email.id, 'isStarred')
        },
        deleteEmail(emailId) {
            emailService.modifyEmailProperty(this.email.id, 'isDeleted')
                .then(() => {
                    const msg = {
                        txt: `The email has been deleted succefully (${emailId})`,
                        type: 'success'
                    }
                    eventBus.$emit('show-msg', msg);
                    const msg2 = {
                        txt: 'the stats have been updated!',
                        type: 'success'
                    }
                    eventBus.$emit('updateStats', msg2);
                })
        }
    },
    computed: {
        emailURL() {
            return 'emailDetails/' + this.email.id
        },
        shortBody() {
            let emailBody = this.email.body
            if (emailBody.length > 100) {
                emailBody = emailBody.substring(0, 100);
            }
            return emailBody
        },
        trashType() {
            if (this.email.isDeleted === false) return '/img/preview-delete.png';
            if (this.email.isDeleted === true) return '/img/preview-undelete.png';
        },
        starType() {
            if (this.email.isStarred === false) return '/img/notstar.png';
            if (this.email.isStarred === true) return '/img/star.png';
        },
        readType() {
            if (this.email.isRead === false) return '/img/unread.png';
            if (this.email.isRead === true) return '/img/read.png';
        }
    },
}