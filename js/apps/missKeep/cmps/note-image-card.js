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
    name: 'imageCmp',
    props: ['note'],
    template: `
    <div :style="{order: noteOrder, display: displayCard}">
        <div class="image-card" :style="{ background: note.color}" @mouseenter="toggleBtns" @mouseleave="toggleBtns">
            <div class="image-card">
            <img style="width:220px;" :src="imageID">
              <i class="fas fa-map-pin" v-if="note.order" @click.stop="removePin(note)"></i>
                </div>
            
                <transition name="fade">
                <card-btns  :note="note"  @deleteNote="deleteNote(note.id)" @addPin="addPin(note)" @changeColor="changeColor" @copyNote="copyNote(note)">
                </card-btns>
                </transition>
        </div>
        </div>
        `,
    computed: {
        imageID() {
            return this.note.url
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
}