'use strict'

import bookPreview from './book-preview.cmp.js';

export default {
    name: 'bookList',
    props: ['books'],
    template: `
    <section class="book-list-container">
        <ul class="book-list flex wrap">
            <router-link v-for="(currBook, idx) in books" :key="currBook.id" :to="'/book/' + currBook.id">
                <book-preview v-bind:book="currBook"></book-preview>
            </router-link>
        </ul>
    </section>
    `,
    components: {
        bookPreview
    }
}