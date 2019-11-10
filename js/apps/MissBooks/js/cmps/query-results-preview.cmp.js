'use strict'

// import { bookService } from '../services/book-service.js';

export default {
    name: 'queryBookPreview',
    props: ['book'],
    template: `
            <li class="book clean">
                <img class="book-img" :src="book.thumbnail" alt="" />
                <h2>{{book.title}}</h2>
                <p>Price: {{this.bookPrice}}</p>
                <button @click="selectBook(book.id)">ADD</button>
            </li>
            `,
    methods: {
        selectBook(bookId) {
            this.$emit('selected', bookId)
        }
    },
    computed: {
        bookPrice() {
            let curCode = this.book.listPrice.currencyCode;
            let currCurCode = null;
            if (curCode === "EUR") currCurCode = '€'
            if (curCode === "ILS") currCurCode = '₪'
            if (curCode === "USD") currCurCode = '$'
            return this.book.listPrice.amount + '' + currCurCode;
        }
    },
}