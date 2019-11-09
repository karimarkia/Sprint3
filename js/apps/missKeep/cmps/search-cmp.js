export default {
    props: [],
    template: `   
        <div class="search">
            <input type="text" v-model:value="searchInput" placeholder="Search">
        </div>
        `
    ,
    data() {
        return {
            searchInput: ''
        }
    },
    methods: {
    },
    computed: {
    },
    watch: {
        searchInput (val) {
            this.$emit('search', val)
        }
    }
}
