'use strict'

import { bookService } from '../services/book-service.js';

export default {
    name: 'bookPreview',
    props: ['book'],
    template: `
            <li class="book clean">
                <img class="book-img" :src="book.thumbnail" alt="" />
                <h2>{{book.title}}</h2>
                <p>Price: {{this.bookPrice}}</p>
            </li>
            `,
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