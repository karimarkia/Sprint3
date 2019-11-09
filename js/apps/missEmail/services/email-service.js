'use strict'

import utilService from '../../../services/util-service.js'

export const emailService = {
    getEmails,
    getEmailById,
    getEmptyEmail,
    sendEmail,
    getPrevNextEmailId,
    deleteEmail,
    modifyEmailProperty,
    getEmailStats
}

const STORAGE_KEY = 'MissEmails'

var gEmails = [{
        id: utilService.makeId(),
        from: 'ohad',
        to: 'ohad',
        subject: 'test',
        body: 'Laboris quis ad nulla veniam commodo tempor ipsum. Enim cupidatat deserunt elit ex do eu duis aliquip exercitation. Pariatur cupidatat ut Lorem pariatur occaecat commodo id ad anim excepteur ea.',
        isStarred: true,
        wasStarred: false,
        isSentByMe: false,
        wasSentByMe: false,
        isRead: false,
        isDeleted: false,
        sentAt: new Date().toTimeString().split(' ')[0]
    },
    {
        id: utilService.makeId(),
        from: 'ohad',
        to: 'david',
        subject: 'testing',
        body: 'Laboris quis ad nulla veniam commodo tempor ipsum. Enim cupidatat deserunt elit ex do eu duis aliquip exercitation. Pariatur cupidatat ut Lorem pariatur occaecat commodo id ad anim excepteur ea.',
        isStarred: true,
        wasStarred: false,
        isSentByMe: false,
        wasSentByMe: false,
        isRead: false,
        isDeleted: false,
        sentAt: new Date().toTimeString().split(' ')[0]
    },
    {
        id: utilService.makeId(),
        from: 'popo',
        to: 'momo',
        subject: 'nice!',
        body: 'Laboris quis ad nulla veniam commodo tempor ipsum. Enim cupidatat deserunt elit ex do eu duis aliquip exercitation. Pariatur cupidatat ut Lorem pariatur occaecat commodo id ad anim excepteur ea.',
        isStarred: false,
        wasStarred: false,
        isSentByMe: false,
        wasSentByMe: false,
        isRead: false,
        isDeleted: false,
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

function getEmailById(emailId) {
    var email = gEmails.find(email => {
        return email.id === emailId
    })
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
        wasStarred: false,
        isSentByMe: true,
        // wasSentByMe: false,
        isRead: false,
        isDeleted: false,
        sentAt: new Date().toTimeString().split(' ')[0]
    };
    return Promise.resolve(emptyEmail);
}

function sendEmail(email) {
    gEmails.unshift(email)
    utilService.saveToStorage(STORAGE_KEY, gEmails)
    return Promise.resolve();

}

function modifyEmailProperty(emailId, property) {
    let idx = gEmails.findIndex(res => res.id === emailId);

    if (idx !== -1 && property === 'isRead') {
        gEmails[idx].isRead = true;
    }
    if (idx !== -1 && property === 'isUnread') {
        gEmails[idx].isRead = false;
    }
    if (idx !== -1 && property === 'isStarred') {
        gEmails[idx].isStarred = !gEmails[idx].isStarred;
    }
    if (idx !== -1 && property === 'isDeleted') {
        if (!gEmails[idx].isDeleted) {
            // for properly deleting
            gEmails[idx].isDeleted = true; //mark this email as deleted
            gEmails[idx].wasStarred = gEmails[idx].isStarred; // saves the state of "STARDOM" to another property
            gEmails[idx].isStarred = false // make sure that this email is no longer STARRED
            gEmails[idx].wasSentByMe = gEmails[idx].isSentByMe; // saves the state of "SENTDOM" to another property
            gEmails[idx].isSentByMe = false;
        } else if (gEmails[idx].isDeleted) {
            // for properly undeleting
            gEmails[idx].isDeleted = false; //mark this email as UNdeleted
            gEmails[idx].isStarred = gEmails[idx].wasStarred; // restores the state of "STARDOM"
            gEmails[idx].isSentByMe = gEmails[idx].wasSentByMe; // restores the state of "SENTDOM"
        }
    }
    utilService.saveToStorage(STORAGE_KEY, gEmails);
    return getEmailById(emailId);
}

function deleteEmail(emailId) {
    let idx = gEmails.findIndex(res => res.id === emailId);
    if (idx !== -1) {
        gEmails[idx].isDeleted = true;
        gEmails[idx].isStarred = false;
        gEmails[idx].isSentByMe = false;
    }
    utilService.saveToStorage(STORAGE_KEY, gEmails);
    console.log('not really deleting email: ', emailId);
    return Promise.resolve();
}

function getEmailStats() {
    let counters = {
        total: gEmails.length,
        read: 0,
        unread: 0
    }
    gEmails.forEach(email => {
            if (!email.isDeleted) {
                if (email.isRead) {
                    counters.read++
                }
                if (!email.isRead) {
                    counters.unread++
                }
            }
            if (email.isDeleted) counters.total--;
        })
        // console.log('the current stats are: ', counters);
    return Promise.resolve(counters);
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