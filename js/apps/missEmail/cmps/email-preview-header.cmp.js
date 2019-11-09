'use strict'

export default {
    name: 'emails-preview-header',
    template: `
        <section class="nav-side-bar flex-col">
            <div class="email-preview-header flex">
                <div class="email-preview-header-spacer"></div>
                <div class="email-preview-header-txt flex spread"> 
                    <div @click="setSort('from')">From</div>
                    <div @click="setSort('subject')">Subject</div>
                    <div @click="setSort('sentAt')">Received</div>
                </div>
            </div>
        </section>
    `,
    methods: {
        setSort(criteria) {
            // console.log('you have requested to sort by: ', criteria);
            const msg = {
                txt: 'a sort has been requested',
                data: criteria,
                type: 'success'
            }
            eventBus.$emit('setSort', msg);
        },
    },
}