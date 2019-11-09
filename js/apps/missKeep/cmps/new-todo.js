import keepService from '../services/keep-service.js'
import opBtns from './button-keep.js'
import {updateColor} from '../services/keep-service.js'
import { eventBus, EVENT_SHOW_MSG }from '../services/event-bus.js'



export default {
    template: `   
    <div  class="createMode new-note todos" :style="{ background: newNote.color}">
        <div class="text-note">
            <div>
                <input type="text" class="todo-title" v-model="newNote.data.headline" ref="headline"   placeholder="New todo-list title" :style="{ background: newNote.color}"> 
                <i class="fas fa-arrow-right" @click="$emit('displayNote')"></i>
            </div>
            <section class="todos">
                <div v-for="(todo,i) in newNote.data.todos">
                    <input type="checkbox" @click.stop='' v-model="newNote.data.todos[i].done">
                    <input v-model="newNote.data.todos[i].text" @focus="noteFocused" @keydown="addLine(i)" ref="body" placeholder="Start typing a task" :style="{ background: newNote.color}">
                    <hr>
                </div>
            </section>
            <op-btns @addNote="addNote" :newNote="newNote" :value="color" @pinNote="pinNote" @changeColor="changeColor"></op-btns>
        </div>
    </div>
    </div>
`,
    data() {
        return {
            newNote: keepService.emptyTodo(),
            color: null
        }
    },
    methods: {
        addNote() {
            if (!this.newNote.data.headline) return
            keepService.addNote(this.newNote)
            this.newNote = keepService.emptyTodo()
            eventBus.$emit(EVENT_SHOW_MSG,'Todo added','success')
        },
        noteFocused() {
            if (!this.newNote.date) this.newNote.date = Date.now()
        },
        pinNote() {
            this.newNote.order = !this.newNote.order
        },
        addLine(i) {
            if (this.newNote.data.todos[i + 1]) return
            this.newNote.data.todos.push({
                num: this.numOfTodos++,
                done: false,
                text: ''
            })
        },
        changeColor() {
            var input = event.target.value
            // console.log(input);
            updateColor(input, this.newNote)
        }
    },
    components: {
        opBtns,
        updateColor
    },
}