'use strict'

export default {
    name: 'emailFilter',
    template: `
    <section class="email-filter-container">
        <div class="flex">
            <input type="text" placeholder="enter text" v-model="filterBy.title" />
        </div>
    </section>
    `,
    data() {
        return {
            filterBy: {
                title: ''
            }
        }
    },
    created() {
        this.$emit('filtered', this.filterBy)
    }
}