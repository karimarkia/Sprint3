'use strict'

export default {
    name: 'bookFilter',
    template: `
    <section class="container book-filter-container">
        <div class="flex end">
        <router-link to="/addBook"><div class="search-criteria flex-col"><h3>Add Book</h3></div></router-link>
            <div class="search-criteria flex-col">
                <h3>Filter by Book Title</h3>
                <input class="search-filter" type="text" placeholder="Title" v-model="filterBy.title" />
            </div>
            <div class="search-criteria flex-col">
                <h3>Filter by Book Price</h3>
                <input class="search-filter" type="number" v-model.number="filterBy.price" />
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            filterBy: {
                title: '',
                price: 0
            }
        }
    },
    created() {
        this.$emit('filtered', this.filterBy)
    }
}