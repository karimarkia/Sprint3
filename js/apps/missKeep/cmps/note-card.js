import textComp from './note-text-card.js'
import todo from './note-todo-card.js'
import videoCmp from './note-video-card.js'
import audioCmp from './note-audio-card.js'
import imageCmp from './note-image-card.js'


export default {
    props: ['note'],
    template: `   
     <transition name="component-fade" mode="out-in">
     
     <component :is="note.type" :note="note"></component>
     </transition>

`,

    data() {
        return {

        }
    },
    methods: {},
    created() {},
    components: {
        textComp,
        todo,
        videoCmp,
        imageCmp,
        audioCmp
    },

}