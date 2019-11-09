export default {
    props: [],
    template: `   
        <div class="search">
        <input type="text" placeholder="Srearch by Name" v-model="filterBy.byName" />
        </div>
        `
    ,
    data() {
        return {
            filterBy: {
                byName: '',
            }
        }
    },
    created() {
        this.$emit('filtered', this.filterBy)
    }
}
