'use strict'

export default {
    name: 'emailFilter',
    template: `
        <section class="email-filter">
                <input type="text" placeholder="search these mails" v-model="filterBy.string" />
        </section>
        `,
    data() {
        return {
            filterBy: {
                string: '',
            }
        }
    },
    created() {
        this.$emit('filtered', this.filterBy)
    }
}