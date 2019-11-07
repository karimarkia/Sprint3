'use strict'

import { utilService } from '../../../services/util-service.js'

export const emailService = {
    getEmails,
    getEmailById,
    getEmptyEmail,
    // sendEmail,
    getPrevNextEmailId
    // deleteEmail
}

const STORAGE_KEY = 'MissEmails'

var gEmails = [{
        id: 101,
        from: 'ohad',
        to: 'ohad',
        subject: 'test',
        body: 'Laboris quis ad nulla veniam commodo tempor ipsum. Enim cupidatat deserunt elit ex do eu duis aliquip exercitation. Pariatur cupidatat ut Lorem pariatur occaecat commodo id ad anim excepteur ea.',
        isRead: false,
        sentAt: 1551133930594
    },
    {
        id: 102,
        from: 'ohad',
        to: 'david',
        subject: 'testing',
        body: 'Laboris quis ad nulla veniam commodo tempor ipsum. Enim cupidatat deserunt elit ex do eu duis aliquip exercitation. Pariatur cupidatat ut Lorem pariatur occaecat commodo id ad anim excepteur ea.',
        isRead: false,
        sentAt: 1551133930511
    },
    {
        id: 103,
        from: 'popo',
        to: 'momo',
        subject: 'nice!',
        body: 'Laboris quis ad nulla veniam commodo tempor ipsum. Enim cupidatat deserunt elit ex do eu duis aliquip exercitation. Pariatur cupidatat ut Lorem pariatur occaecat commodo id ad anim excepteur ea.',
        isRead: false,
        sentAt: 1305133930594
    },
]

function getEmails() {
    var emails = utilService.load(STORAGE_KEY)
    if (!emails || emails.length === 0) {
        emails = gEmails;
    }
    utilService.store(STORAGE_KEY, emails)
    gEmails = emails
        // console.log('the emailService is returning this result: ', emails)
    return Promise.resolve(emails);
}

function getEmailById(emailId) {
    // console.log('this is what is being piped into the fxn', typeof emailId)

    var email = gEmails.find(email => {
            // console.log(email.id)
            return email.id === emailId
        })
        // console.log(email)
    return Promise.resolve(email);
}

function getEmptyEmail() {
    return {
        id: utilService.makeId(),
        from: '',
        to: '',
        subject: '',
        body: '',
        isRead: false,
        sentAt: null
    };
}

function deleteEmail(emailId) {
    console.log('deleting email: ', emailId);
}

function getPrevNextEmailId(emailId, direction) {
    var idx = gEmails.findIndex(email => email.id === emailId);
    if (direction === 'next') {
        idx++;
        if (idx === gEmails.length) idx = 0;
    }
    if (direction === 'prev') {
        idx--;
        if (idx < 0) idx = gEmails.length - 1;
    }
    return gEmails[idx].id;
}