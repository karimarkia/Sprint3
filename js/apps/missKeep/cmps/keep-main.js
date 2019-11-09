import keepService from '../services/keep-service.js'
import newNote from './new-note.js';
import newTodo from './new-todo.js';
import notesBoard from './notes-board.js';
import searchFilter from './search-filter.cmp.js';
import userMsg from './user-msg-cmp.js'

export default {
    template: `   
    <div class="notes-app-div" >
        <div class="bcg"></div>

            <section class=notes-app>
                <new-note v-if="newNote" @displayTodo="newNote = false" ></new-note>
                <new-todo v-if="!newNote" @displayNote="newNote = true"></new-todo>
                <search-filter @filtered="setFilter"></search-filter> 
                <notes-board :notes="notesToshow"></notes-board>
                <user-msg></user-msg>
            </section>
        </div>
`,
    data() {
        return {
            notes: [],
            newNote: true,
            filterBy: null,

        }
    },

    mounted() {

    },
    methods: {    
        setFilter(filterBy) {
            // console.log('Parent got filter:', filterBy);
            this.filterBy = filterBy
        }
    },
    computed: {
        notesToshow() {
            if (!this.filterBy)
                return this.notes;
            var regex = new RegExp(`${this.filterBy.byName}`, 'i');
            return this.notes.filter(note =>
                regex.test(note.text.headline)
            )
        }

    },
    created() {
        keepService.getNotes()
            .then(note => {
                this.notes = note
            })
    },
    components: {
        newNote,
        notesBoard,
        keepService,
        newTodo,
        searchFilter,
        userMsg
    },
  
}