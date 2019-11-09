'use strict'

export default {
    name: 'emailFilter',
    template: `
        <section class="email-filter flex spread centered">
                <input class="search-field" type="text" placeholder="search these mails" v-model="filterBy.string" />
                <button class="email-filter-read-btn" :class="{'email-filter-read-btn-on': filterBy.isRead}" @click.stop="showUnread">Show Unread</button>
        </section>
        `,
    data() {
        return {
            filterBy: {
                string: '',
                isRead: false
            }
        }
    },
    methods: {
        showUnread() {
            this.filterBy.isRead = !this.filterBy.isRead
        },
    },
    computed: {},
    created() {
        this.$emit('filtered', this.filterBy)
    }
}