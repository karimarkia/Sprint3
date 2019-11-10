'use strict'

import { bookService } from '../services/book-service.js';

export default {
    name: 'bookReview',
    props: ['book'],
    template: `
        <section class="container">
        <div class="review-heading">Submit a book review:</div>
            <form class="review-container flex spread" @submit.prevent="saveReview">
                <input class="book-review" ref="inputReviewerName" type="text" placeholder="Reviewer Name" value="Books Reader" v-model.trim="ReviewToEdit.reviewerName" />
                <select class="book-review" name="Rating" ref="inputRating" v-model="ReviewToEdit.rating">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <input class="book-review" ref="inputDate" type="date" value="2017-06-01" v-model="ReviewToEdit.dateRead">
                <textarea class="book-review" ref="inputTxt" placeholder="What did you think about this book?" v-model="ReviewToEdit.openReview"></textarea>
                <button>Add</button>
            </form>
        </section>
        `,
    data() {
        return {
            ReviewToEdit: bookService.getEmptyReview()
        }
    },
    methods: {
        saveReview() {
            bookService.saveBook(this.book, this.ReviewToEdit)
            this.$refs.inputReviewerName.value = null;
            this.$refs.inputRating.value = 0;
            this.$refs.inputDate.value = null;
            this.$refs.inputTxt.value = null;

        }
    },
    mounted() {
        this.$refs.inputReviewerName.focus();

    }
}
/* <button :disabled="!dataIsValid">Add</button> */