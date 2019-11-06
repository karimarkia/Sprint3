import keepService from '../services/keep-service.js'
import opBtns from '../cmps/button-keep.js'

export default { 
    template: `   
    <div  :class="['new-note']" :style="{ background: newNote.color}">
        <div class="text-note">
        <input  type="text" v-model="newNote.text.headline" ref="headline"  @blur="noteBlur" placeholder="Title" :style="{ background: newNote.color}"> 
       
        <input cols="30" rows="5" v-model="newNote.text.body" @focus="noteFocused" @blur="noteBlur" ref="body" placeholder="Title" :style="{ background: newNote.color}">
        <op-btns  @addNote="addNote" :newNote="newNote" @colorFocus="btnsFocus" @colorblur="btnBlur" @pinNote="pinNote"></op-btns>

           <!-- <button @click="addNote">add</button> -->
        </div>
    </div>
`
    ,
    data() {
        return {
            newNote: keepService.emptyNote()
     
        }
    },
    computed: {
        // textareaPlaceholder() {
        //     if (this.video) return 'Enter youtube link here!'
        //     else return 'Take a note..'
        // }
    },
    components: {
        // opBtns
    },
    methods: {
        addNote() {  
            console.log(this.newNote);
                      
            // if (!this.newNote.text.headline && !this.newNote.text.body) return            
            keepService.addNote(this.newNote)
            this.newNote=keepService.emptyNote()
           
        },
        noteFocused() {
            if (!this.newNote.date) this.newNote.date = Date.now();
            if (this.video) return;
            const body = this.$refs.body;
            setTimeout(() => body.focus(), 0);

        },
        noteBlur() {
            setTimeout(() => {
                const body = this.$refs.body;
                const headline = this.$refs.headline
                setTimeout(() => {
                    if (body === document.activeElement || headline === document.activeElement) return;
                    this.edit = false;
                    // this.addNote()
                    this.newNote.color = '#ffffff'
                }, 0)
            }, 100)
        },
        btnsFocus() {
            this.optedit = true;
        },
        btnBlur() {
            const body = this.$refs.body;
            body.focus()
            this.optedit = false;
        },
        pinNote() {
            this.btnsFocus()
            this.newNote.order = !this.newNote.order
            this.btnBlur()
        }
    },
    components:{
        opBtns
    }
}