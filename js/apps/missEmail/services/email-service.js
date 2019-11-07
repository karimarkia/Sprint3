'use strict'

import utilService from '../../../services/util-service.js'

export const emailService = {
    getEmails,
    getEmailById,
    getEmptyEmail,
    sendEmail,
    getPrevNextEmailId,
    deleteEmail
}

const STORAGE_KEY = 'MissEmails'

var gEmails = [{
        id: utilService.makeId(),
        from: 'ohad',
        to: 'ohad',
        subject: 'test',
        body: 'Laboris quis ad nulla veniam commodo tempor ipsum. Enim cupidatat deserunt elit ex do eu duis aliquip exercitation. Pariatur cupidatat ut Lorem pariatur occaecat commodo id ad anim excepteur ea.',
        isStarred: true,
        sentByMe: false,
        isRead: false,
        sentAt: new Date().toTimeString().split(' ')[0]
    },
    {
        id: utilService.makeId(),
        from: 'ohad',
        to: 'david',
        subject: 'testing',
        body: 'Laboris quis ad nulla veniam commodo tempor ipsum. Enim cupidatat deserunt elit ex do eu duis aliquip exercitation. Pariatur cupidatat ut Lorem pariatur occaecat commodo id ad anim excepteur ea.',
        isStarred: true,
        sentByMe: false,
        isRead: false,
        sentAt: new Date().toTimeString().split(' ')[0]
    },
    {
        id: utilService.makeId(),
        from: 'popo',
        to: 'momo',
        subject: 'nice!',
        body: 'Laboris quis ad nulla veniam commodo tempor ipsum. Enim cupidatat deserunt elit ex do eu duis aliquip exercitation. Pariatur cupidatat ut Lorem pariatur occaecat commodo id ad anim excepteur ea.',
        isStarred: false,
        sentByMe: false,
        isRead: false,
        sentAt: new Date().toTimeString().split(' ')[0]
    },
]

function getEmails() {
    var emails = utilService.loadFromLocalStorage(STORAGE_KEY)
    if (!emails || emails.length === 0) {
        emails = gEmails;
    }
    utilService.saveToStorage(STORAGE_KEY, emails)
    gEmails = emails
    return Promise.resolve(emails);
}

function getEmailById(emailId, modifier) {
    var email = gEmails.find(email => {
        return email.id === emailId
    })
    if (modifier) {
        email.isRead = true
        let idx = gEmails.findIndex(res => res.id === emailId);
        if (idx !== -1) gEmails.splice(idx, 1, email)
        utilService.saveToStorage(STORAGE_KEY, gEmails)
        console.log('this e-mail has been read', email.isRead)
        console.log('the DB has been updated', gEmails[idx].isRead)
    }
    return Promise.resolve(email);
}

function getEmptyEmail() {
    let emptyEmail = {
        id: utilService.makeId(),
        from: 'Ohad',
        to: '',
        subject: '',
        body: '',
        isStarred: false,
        sentByMe: true,
        isRead: false,
        sentAt: new Date().toTimeString().split(' ')[0]
    };
    return Promise.resolve(emptyEmail);
}

function sendEmail(email) {
    console.log('the email that the service is sending is: ', email);
    gEmails.unshift(email)
    utilService.saveToStorage(STORAGE_KEY, gEmails)
    return Promise.resolve();

}

function deleteEmail(emailId) {
    let idx = gEmails.findIndex(email => email.id === emailId);
    if (idx !== -1) gEmails.splice(idx, 1)
    utilService.saveToStorage(STORAGE_KEY, gEmails)
    console.log('deleting email: ', emailId);
    return Promise.resolve();
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