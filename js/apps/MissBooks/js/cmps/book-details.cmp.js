// 'use strict'

// import { bookService } from '../services/book-service.js';
// import bookReview from './book-review.cmp.js';
// import { eventBus } from '../services/event-bus-service.js';

// export default {
//     name: 'bookDetails',
//     props: ['book'],
//     template: `
//             <section v-if="currBook" class="book-details-container flex-col">  
//                 <div class="pagination flex end">
//                     <router-link :to="'/book/' + prevBookId"><button>Prev Book</button></router-link>
//                     <router-link :to="'/book/' + nextBookId"><button>Next Book</button></router-link>
//                     <router-link to="/missBooks"><img class="back" src="/img/back.png" alt="" /></router-link>
//                 </div>
//                 <div class="flex">
//                     <img class="book-pic" :src="this.currBook.thumbnail" alt="" />
//                     <div class="book-details flex-col">
//                         <h1 class="underlined">{{this.currBook.title}}</h1>
//                         <h3>{{this.currBook.subtitle}}</h3>
//                         <h4>Authors: {{this.bookAuthors}}</h4>
//                         <p>{{this.typeOfRead}}</p>
//                         <p>{{this.ageOfBook}}</p>
//                         <p>Categories: <span class="categories">{{this.bookCategories}}</span></p>
//                         <h3 :class="{expensive: isExpensive, cheap: isCheap}">Price: {{this.bookPrice}}</h3>
//                         <div class="pic" v-if="this.isOnsale">
//                             <img src="/img/onsale.png" />
//                         </div>
//                     </div>
//                 </div>
//                 <div class="description">
//                     <span class="bold">Description: </span>{{this.currBook.description}}
//                 </div>
//                 <book-review v-bind:book="currBook"></book-review>
//                 <ul>
//                     <li class="review-item flex spread" v-for="(currReview, idx) in this.getReviews" :key="currReview.id">
//                     <p>Reviewed By: {{currReview.reviewerName}}</p>
//                     <p>Rating: {{currReview.rating}}</p> 
//                     <p>Date Read: {{currReview.dateRead}}</p>
//                     <p>Review: {{currReview.openReview}}</p>
//                     <button @click="removeReview(currReview.id)">Delete</button>
//                     </li>
//                 </ul>
//             </section>
//             `,
//     data() {
//         return {
//             isExpensive: false,
//             isCheap: false,
//             isOnsale: false,
//             currBook: null,
//             nextBookId: null,
//             prevBookId: null
//         }
//     },
//     methods: {
//         removeReview(reviewId) {
//             bookService.removeReview(this.currBook.id, reviewId)
//                 .then(() => {
//                     const msg = {
//                         txt: `The review has been deleted succefully (${reviewId})`,
//                         type: 'success'
//                     }
//                     eventBus.$emit('show-msg', msg);
//                 })
//         },
//         loadBook() {
//             let bookId = this.$route.params.id;
//             this.nextBookId = bookService.getPrevNextBookId(bookId, 'next');
//             this.prevBookId = bookService.getPrevNextBookId(bookId, 'prev');
//             bookService.getBookById(bookId)
//                 .then(book => {
//                     this.currBook = book;
//                 })
//         }
//     },
//     computed: {
//         bookPrice() {
//             this.isExpensive = false;
//             this.isCheap = false;
//             this.isOnSale = false;
//             let rawAmount = this.currBook.listPrice.amount;
//             let bookOnSale = this.currBook.listPrice.isOnSale
//             let price = '$' + this.currBook.listPrice.amount;
//             if (rawAmount > 150) this.isExpensive = true;
//             if (rawAmount < 20) this.isCheap = true;
//             if (bookOnSale === true) {
//                 this.isOnSale = true;
//             }
//             return price;
//         },
//         bookAuthors() {
//             return this.currBook.authors.join(', ');
//         },
//         bookCategories() {
//             return this.currBook.categories.join(', ');
//         },
//         typeOfRead() {
//             let pageCount = this.currBook.pageCount;
//             let txt = `(${pageCount} pages)`;
//             if (pageCount >= 500) return 'Long read ' + txt;
//             if (pageCount >= 100 && pageCount <= 500) return 'Decent read ' + txt;
//             if (pageCount < 100) return 'Light read ' + txt;
//         },
//         ageOfBook() {
//             let published = this.currBook.publishedDate;
//             let currYear = new Date().getFullYear();
//             let txt = `(Published: ${published})`;
//             if (currYear - published > 10) return 'Veteran Book ' + txt;
//             if (currYear - published < 2) return 'New! ' + txt;
//         },
//         getReviews() {
//             return this.currBook.reviews;
//         }
//     },
//     components: {
//         bookReview
//     },
//     created() {
//         this.loadBook();
//     },
//     watch: {
//         '$route.params.id' () {
//             console.log('Route param: "id" changed');
//             this.loadBook();
//         }
//     }
// }