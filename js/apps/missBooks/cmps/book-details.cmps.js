import longText from '../cmps/long-text.cmp.js';
import reviewApp from '../cmps/review-app.cmps.js';
import bookService from '../service/book-service.js'


export default {
    template: `
    <section v-if="book" class="book-details flex space-around">
    <div class="flex book-details-container">
              <div class="book-details-img">   
              <img class="book-img" :src="book.thumbnail"/>
              </div>

               <div class="book-details-header flex-col align-center">
               <h1>{{book.title}}</h1>
               <h3>{{book.subtitle}}</h3>
               <p><span>Authors: </span>{{book.authors.toString()}}</p>
              <h3>published Date</h3>
              <h5>{{this.book.publishedDate}} - <span>{{publishedDateTxt}}</span></h5>

               <div  class="book-details-main flex-col align-center">
                   <p class="book-desc"><span>description:</span>{{cutDesc}}</p>
                   <long-text v-if ="showDesc" v-bind:txt="this.book.description" v-bind:len=100></long-text>                <!-- <span class="readMore" @click="isReadMore">read more...</span></div> -->
            
                   <button class="more-btn" v-if="book.description.length > 100" v-on:click="openTxt">{{txtMore}}</button>
                   <p><span>page Count:</span>{{book.pageCount}} {{currTxt}}</p>
        


         <p><span>categories:</span>{{book.categories.toString()}}</p>
         <p><span>language </span>:{{book.language}}</p>
        <p :class="amountColor"><span>amount: </span>{{book.listPrice.amount}} {{IconCuurency}}
        <img v-if="book.listPrice.isOnSale" src="img/sale.png" class="sale"/>
         </p>
        </div>
        </div>
         <button  @click="reviewBook">
             <i class="fas fa-pen"></i>
         add review
             </button>
    </div> 
    </div> 
         <!-- <review-app></review-app> -->
    </section>
    `,
    data() {
        return {
            book: null,
            showDesc: null,
            txtMore: 'more'
        }
    },
    methods: {
        reviewBook() {
            var bookId = this.book.id
            var urlTo = `/bookReview/${bookId}`
            this.$router.push(urlTo)
        },
        openTxt() {
            this.showDesc = !this.showDesc
            this.txtMore = this.txtMore === 'more' ? 'less' : 'more'
        },
    },
    computed: {

        publishedDateTxt() {
            var currYear = (new Date()).getFullYear();
            var bookYear = currYear - (this.book.publishedDate)
            if (bookYear > 10) {
                return 'Veteran Book'
            } else if (bookYear < 1) {
                return 'New'
            } else {
                return ''
            }
        },
        // bookDetailsClass() {
        //     return { 'expensivPrice': this.book.listPrice.amount > 150, 'cheapPrice': this.book.listPrice.amount < 20 }
        // },
        currTxt() {
            var spanTxt = ''
            var currLen = this.book.pageCount
            if (currLen < 100) {
                spanTxt = '(Light Reading)'
            } else if (currLen > 200 && currLen < 500) {
                spanTxt = '(Decent Reading)'
            } else if (currLen > 500) {
                spanTxt = '(Long reading)'
            }

            return spanTxt;

        },
        IconCuurency() {
            var symbol = {
                USD: '$', // US Dollar
                EUR: '€', // Euro
                ILS: '₪', // Israeli New Sheqel
            }
            return symbol[this.book.listPrice.currencyCode]

        },
        amountColor() {
            var currPrice = this.book.listPrice.amount;
            console.log(currPrice);

            if (currPrice < 20) {
                return 'green'
            } else if (currPrice > 150) {
                return 'red'
            } else {
                return ''
            }
        },
        cutDesc() {
            var bookDesc = this.book.description
            if (bookDesc.length > 100) {
                bookDesc = bookDesc.substring(0, 100);
            }
            return bookDesc
        },
    },
    created() {
        const dogId = this.$route.params.id;
        console.log(dogId);

        bookService.getBookById(dogId)
            .then(book => {
                console.log('book', book)

                this.book = book
            })
    },
    components: {
        longText,
        reviewApp
    }

}