'use strict'

export default {
    name: 'emailFilter',
    template: `
    <section class="email-filter">
            <input type="text" placeholder="search all mails" v-model="filterBy.subject" />
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