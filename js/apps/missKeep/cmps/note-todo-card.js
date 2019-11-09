import {
    deleteNote,
    updateColor,
    removePin,
    addPin,
    updateNote,
    updateTodoItem,
    copyNote,
    updateTodo
} from '../services/keep-service.js'
import modal from './modal.cmp.js'
import cardBtns from './text-card-btns-cmp.js'
import { eventBus, EVENT_SHOW_MSG }from '../services/event-bus.js'

export default {
    name: 'todoCmp',
    props: ['note'],
    template: `
    <div :style="{order: noteOrder, display: displayCard}">
        <div class="note-card" :style="{ background: note.color}" @mouseenter="toggleBtns" @mouseleave="toggleBtns">
            <div  @click="displayModal = true">
                <h2>{{note.data.headline}}</h2>
                <i class="fas fa-map-pin" v-if="note.order" @click.stop="removePin(note)"></i>
            </div>
            <div class="todos-section"> 
                <div v-for="(todo,i) in note.data.todos" class="todo">
                    <input type="checkbox" @click="updateCheckbox(note ,i)" v-model="todo.done">
                    <p>{{todo.text}}</p>
                </div>
            </div>
            <transition name="fade">
                <card-btns v-show="showBtns" :note="note" @copyNote="copyNote(note)" @deleteNote="deleteNote(note.id)" @addPin="addPin(note)" @changeColor="changeColor">
                </card-btns>
                </transition>
         
        </div>
        <transition name="fade">
            <modal  :note="note" v-if="displayModal" @closeModal="displayModal=false" @updateTodo="updateTodo"></modal>
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
            this.displayCard = 'none';
            eventBus.$emit(EVENT_SHOW_MSG,'Todo Delete','error')
        },
        removePin(note) {
            this.showBtns = false;
            removePin(note)
        },
        addPin(note) {
            this.showBtns = false;
            addPin(note);
        },
        updateTodo(body, headline) {
            updateTodo(this.note, body, headline)
        },
        changeColor() {
            let input = event.target.value
            updateColor(input, this.note)
        },
        updateCheckbox(note, i) {
            updateTodoItem(note, i)
        },
        copyNote(noteid) {
            copyNote(noteid)
        }
    },
    components: {
        cardBtns,
        modal
    },
 
}