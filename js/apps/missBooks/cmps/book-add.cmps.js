import bookService from '../service/book-service.js'

export default {
    template: `
    <div>
        <input type="text" @input="onSearch" v-model="searchInput">
        <ul v-if="listBook" class="google-res clean-list" >
            <li v-for="item in listBook">
                <div class="flex space-between align-center">
                <p>{{item.volumeInfo.title}}</p>
                <button @click="addNewBook(item)" class="fas fa-plus-circle" ></button>
                </div>
            </li>
        </ul>
        </div>
    `,
    data() {
        return {
            searchInput: '',
            listBook: null,
            // newBook: bookService.emptyBook()
        }
    },
    methods: {
        onSearch() {
            // console.log(this.searchInput);
            if (this.searchInput === '') this.listBook = null
            else
                bookService.getBooksApi(this.searchInput)
                .then(res => {
                    console.log(res.data);
                    this.listBook = res.data.items
                })
        },
        addNewBook(book) {
            console.log(book);
            
            // var newBookAdd = this.newBook
            bookService.addBook(book)
                

            this.listBook=null
        }
    },

}