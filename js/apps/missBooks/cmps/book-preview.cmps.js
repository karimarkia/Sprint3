export default {
    props: ['book'],
    template: `
        <div class="test">
            <h3>{{book.title}}</h3>
            <img :src="book.thumbnail">
        <h1>Amount : {{book.listPrice.amount}} {{IconCuurency}}</h1>
        </div>
    `,
    methods: {

    },
    computed: {
        IconCuurency() {
            var symbol = {
                USD: '$', // US Dollar
                EUR: '€', // Euro
                ILS: '₪', // Israeli New Sheqel
            }
            return symbol[this.book.listPrice.currencyCode]
        },
       
    },
}