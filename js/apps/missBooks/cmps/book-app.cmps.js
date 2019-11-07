import bookService from '../service/book-service.js'
import bookFilter from '../cmps/book-filter.cmps.js'
import bookList from '../cmps/book-list.cmps.js'
import bookDetails from '../cmps/book-details.cmps.js'
import bookAdd from '../cmps/book-add.cmps.js'

export default {
    template: `
       <section class="books-container">    
           <book-filter @filtered="setFilter"></book-filter>
           <book-add></book-add>
       <book-list :books="booksToShow" @selected="selectBook"></book-list>
       <book-details v-if="!isShownBook" :book="selectedBook"></book-details>
       </section>
    `,
    data() {
        return {
            books: [],
            filterBy: null,
            isShownBook: true,
            selectedBook: null
        }
    },
    methods: {
        selectBook(bookId) {
            this.isShownBook = !this.isShownBook;

            bookService.getBookById(bookId)
                .then(book => {
                    console.log('book', book)

                    this.selectedBook = book
                })
        },
        setFilter(filterBy) {
            // console.log('Parent got filter:', filterBy);
            this.filterBy = filterBy
        }
    },
    computed: {
        booksToShow() {
            if (!this.filterBy)
                return this.books;
            var regex = new RegExp(`${this.filterBy.byName}`, 'i');
            return this.books.filter(book =>
                regex.test(book.title, book.fromPrice)
            )
        }
    },
    created() {
        bookService.getBooks()
            .then(books => this.books = books)
    },
    components: {
        // bookService,
        bookFilter,
        bookList,
        bookDetails,
        bookAdd
    }

}