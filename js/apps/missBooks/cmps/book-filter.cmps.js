export default {
    template: `
    <section class="filter-book">
        <input type="text" placeholder="Srearch by Name" v-model="filterBy.byName" />
        <input type="number" placeholder="Srearch by Price" v-model.number="filterBy.fromPrice" />
    </section>
    `,
    data() {
        return {
            filterBy: {

                byName: '',
                fromPrice: 0

            }
        }
    },
    created() {
        // console.log('DogFilter Created');
        this.$emit('filtered', this.filterBy)
    }
}