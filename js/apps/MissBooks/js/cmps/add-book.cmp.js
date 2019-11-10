'use strict'

import { bookService } from '../services/book-service.js';
import { sendQuery } from '../services/search-service.js';
import bookPreview from './query-results-preview.cmp.js';

export default {
    name: 'add-book',
    template: `

            <section class="container">
                <div class="search-header flex spread">
                    <p class="review-heading">Search for a Book: </p>
                    <router-link to="/missBooks"><img class="back" src="/img/back.png" alt="" /></router-link>
                </div>
                <form class="review-container flex spread" @submit.prevent="sendQuery">    
                    <input class="search-field" ref="inputSearchGoogle" type="text" placeholder="type your query here" v-model="searchStr" />
                    <button>Search</button>
                    
                </form>
                <ul class="book-list flex wrap">
                    <book-preview v-for="(currFoundBook, idx) in formattedRes" :key="currFoundBook.id" @selected="selectBook" :book="currFoundBook"></book-preview>
                </ul>
            </section>

        `,
    data() {
        return {
            searchStr: '',
            searchRes: null,
            formattedRes: null
        }
    },
    methods: {
        sendQuery() {
            sendQuery(this.searchStr)
                .then(res => {
                    console.log('res:', res);
                    this.searchRes = res.data.items;
                    this.formattedRes = bookService.saveGoogleQueryBooks(res.data.items);
                    console.log('formatted search results: ', this.formattedRes);
                })
        },
        selectBook(bookId) {
            console.log('emitted book ID: ', bookId);
            bookService.addGoogleBooktoDB(bookId)
                .then(res => {
                    console.log('book has been added to the DB')
                })
        }
    },
    components: {
        bookPreview
    }
}