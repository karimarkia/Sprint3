'use strict'

export default {
    name: 'emailFilter',
    template: `
    <section class="flex email-filter-container">
            <input type="text" placeholder="enter text" v-model="filterBy.subject" />
    </section>
    `,
    data() {
        return {
            filterBy: {
                subject: ''
            }
        }
    },
    created() {
        this.$emit('filtered', this.filterBy)
    }
}