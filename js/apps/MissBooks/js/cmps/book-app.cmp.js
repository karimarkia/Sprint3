'use strict';

import bookDetails from './book-details.cmp.js';
import bookPreview from './book-preview.cmp.js';
import bookList from './book-list.cmp.js';
import bookFilter from './book-filter.cmp.js';

import { bookService } from '../services/book-service.js';
import '../services/event-bus-service.js'
import theRouter from '../routes.js'

Vue.config.productionTip = false;

export default {
    name: 'bookApp',
    template: `
        <section>
            <book-filter @filtered="setFilter"></book-filter>
            <book-list :books="booksToShow" @selected="selectBook"></book-list>
            <book-details :book="selectedBook" v-if="selectedBook" @modalClosed="putDetailsDown" :modal="isDetailsUp"></book-details>
        </section>
        `,
    data() {
        return {
            books: [],
            book: null,
            selectedBookId: null,
            filterBy: null,
            isDetailsUp: true,
            selectedBook: null

        }
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy
        },
        selectBook(bookId) {
            let book = bookService.getBookById(bookId)
                .then(book => {
                    debugger
                    this.selectedBook = book;
                    this.isDetailsUp = true;
                    console.log(book)
                })
        },
        putDetailsDown() {
            this.isDetailsUp = false
        }
    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books;
            return this.books.filter(book =>
                book.title.toLowerCase().includes(this.filterBy.title.toLowerCase()) && book.listPrice.amount >= this.filterBy.price
            )
        }
    },
    created() {
        bookService.queryBooks()
            .then(books => {
                this.books = books
            })
    },
    components: {
        bookDetails,
        bookPreview,
        bookList,
        bookFilter
    }

}