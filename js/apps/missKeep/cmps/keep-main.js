import keepService from '../services/keep-service.js'
import newNote from './new-note.js';
import notesBoard from './notes-board.js';

export default {
    template: `   
    <div class="notes-app-div" >
        <div class="bcg"></div>

            <section class=notes-app>
                <new-note v-if="newNote" @displayTodo="newNote = false" ></new-note>
                <notes-board :notes="notes"></notes-board>
            </section>
        </div>
`,
    data() {
        return {
            notes: [],
            newNote: true,
        }
    },
    created() {
     keepService.getNotes()
                .then(note=>{
                    this.notes=note
                })
    },
    mounted() {

    },
    components: {
        newNote,
        notesBoard,
        keepService
    },
}