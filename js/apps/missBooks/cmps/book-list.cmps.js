import bookPreview from '../cmps/book-preview.cmps.js'

export default {
    props: ['books'],
    template: `
    <section class="book-list">
    <router-link v-for="currBook in books" :key="currBook.id" :to="'/book/details/'+currBook.id">
        <book-preview :book="currBook"></book-preview> 
        </router-link>
    </section>
    `,
    methods: {
        // selectedBookId(bookId) {
        //     this.$emit('selected', bookId);
        // }
    },
    created() {
        console.log(this.books)
    },
    components:{
        bookPreview
    },
    computed: {
        // bookDetailsLink() {
        //     return ``
        // },
    },
}