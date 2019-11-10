import cardBtns from './text-card-btns-cmp.js'
import {
    deleteNote,
    updateColor,
    removePin,
    addPin,
    updateNote,
    copyNote
} from '../services/keep-service.js'



export default {
    name: 'videoCmp',
    props: ['note'],
    template: `
 <div :style="{order: noteOrder, display: displayCard}">
     <div class="video-card" :style="{ background: note.color}" @mouseenter="toggleBtns" @mouseleave="toggleBtns">
         <div class="video-card">
         <iframe width="250px" height="" :src="videoID"></iframe>
              <i class="fas fa-map-pin" v-if="note.order" @click.stop="removePin(note)"></i>
                </div>
            
                <transition name="fade">
                <card-btns v-show="showBtns" :note="note" @copyNote="copyNote(note)" @deleteNote="deleteNote(note.id)" @addPin="addPin(note)" @changeColor="changeColor">
                </card-btns>
                </transition>
        </div>
        </div>
        `,
    computed: {
        videoID() {
            let youtubeUrl = 'https://www.youtube.com/embed/'
            const urlLength = this.note.url.length
            const idBeginning = urlLength - 11
            const videoid = this.note.url.substring(idBeginning, urlLength)
            youtubeUrl += videoid
            console.log(youtubeUrl);
            return youtubeUrl
        },
        noteOrder() {
            return this.note.order ? -1 : 0
        },
    },

    components: {
        cardBtns
    },
    data() {
        return {
            order: false,
            showBtns: false,
            displayCard: 'flex',
            displayModal: false,
        }
    },
    methods: {
        toggleBtns() {
            this.showBtns = !this.showBtns
        },
        deleteNote(noteid) {
            deleteNote(noteid)
            eventBus.$emit(EVENT_SHOW_MSG, 'Note Delete', 'error')
        },
        removePin(note) {
            this.showBtns = false;
            removePin(note)
        },
        addPin(note) {
            this.showBtns = false;
            addPin(note);
        },
        updateNote(body, headline) {
            updateNote(this.note, body, headline)
        },

        changeColor() {
            let input = event.target.value
            updateColor(input, this.note)
        },
        copyNote(noteid) {
            copyNote(noteid)
        }



    },
    components: {
        cardBtns
    },
}