import {
    deleteNote,
    updateColor,
    removePin,
    addPin,
    updateNote,
    copyNote
} from '../services/keep-service.js'
import modal from './modal.cmp.js'
import cardBtns from './text-card-btns-cmp.js'
import { eventBus, EVENT_SHOW_MSG }from '../services/event-bus.js'

export default {
    name: 'textComp',
    props: ['note'],
    template: `
    <div :style="{order: noteOrder, display: displayCard}">
        <div class="note-card" :style="{ background: note.color}" @mouseenter="toggleBtns" @mouseleave="toggleBtns">
            <div  @click="displayModal = true">
                <h2>{{note.text.headline}}</h2>
                <i class="fas fa-map-pin" v-if="note.order" @click.stop="removePin(note)"></i>
            </div>
               <p @click="displayModal = true">{{note.text.body}}</p>
               <transition name="fade">
                <card-btns v-show="showBtns" :note="note"  @sendToMail="sendToMail(note)" @deleteNote="deleteNote(note.id)" @addPin="addPin(note)" @changeColor="changeColor" @copyNote="copyNote(note)">
                </card-btns>
                </transition>
        </div>
        <transition name="fade">
            <modal :note="note" v-if="displayModal" @closeModal="displayModal = false" @updateNote="updateNote" ></modal>
            </transition>

    </div>
       `,
    data() {
        return {
            showBtns: false,
            displayCard: 'flex',
            displayModal: false,
        }
    },
    computed: {
        noteOrder() {
            return this.note.order ? -1 : 0
        }
    },
    methods: {
        toggleBtns() {
            this.showBtns = !this.showBtns
        },
        deleteNote(noteid) {
            deleteNote(noteid)
            eventBus.$emit(EVENT_SHOW_MSG,'Note Delete','error')
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
        },
        sendToMail(note) {
            console.log(note);
            setTimeout(() => {
                this.$router.push(`/missEmail/emailCompose`)
            }, 1000)
            setTimeout(() => {
                eventBus.$emit('noteToMessage', note)
            }, 1000)
        }

    },
    components: {
        modal,
        cardBtns
    },

}