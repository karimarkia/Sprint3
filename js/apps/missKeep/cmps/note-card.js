import textComp from './note-text-card.js'

export default {
    props: ['note'],
    template: `   
        <component :is="note.type" :note="note"></component>
`,
    data() {
        return {

        }
    },
    methods: {},
    created() {},
    components: {
        textComp
    },

}