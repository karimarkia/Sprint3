import keepService from '../services/keep-service.js'
import opBtns from './button-keep.js'
import {
    updateColor,
    updateNote,
} from '../services/keep-service.js'
import { eventBus, EVENT_SHOW_MSG }from '../services/event-bus.js'



export default {
    template: `   
    <div  :class="[{ createMode: edit }, 'new-note']" :style="{ background: newNote.color}">
        <div class="text-note">
            <input v-if="edit" type="text" v-model="newNote.text.headline" ref="headline"  @blur="noteBlur" placeholder="Title" :style="{ background: newNote.color}"> 
            
            <input cols="30" rows="5" v-model="newNote.text.body"  @focus="noteFocused" @blur="noteBlur" ref="body" :placeholder="textareaPlaceholder" :style="{ background: newNote.color}">
            <op-btns  v-show="edit" @addNote="addNote" :newNote="newNote" @changeColor="changeColor" @colorFocus="btnsFocus" @colorblur="btnBlur" @pinNote="pinNote"></op-btns>
        </div>

        <div class="upload-btns" v-if="!edit">
        <i class="fas fa-list" v-if="!image" @click="$emit('displayTodo')"></i>
        <i  v-else-if="!video" @click="$emit('displayTodo')"></i>
        <i :class="videoClass" @click="uploadVideo"></i>
        <i :class="imgClass" @click="uploadImg"></i>
        <i :class="audioClass" @click="uploadAudio"></i>
    </div>
    
    


    </div>
`,
    data() {
        return {
            newNote: keepService.emptyNote(),
            edit: false,
            optedit: false,
            video: false,
            image: false,
            audio: false,
            videoClass: 'fab fa-youtube',
            imgClass: 'fas fa-image',
            audioClass: 'fas fa-volume-up',
        }
    },
    computed: {
        textareaPlaceholder() {
            if (this.video) return 'Enter youtube link here!'
            if (this.image) return 'Enter Image link here!'
            if (this.audio) return 'Enter Audio link here!'
            else return 'Take a note..'
        }
    },

    methods: {
        addNote() {
            if (!this.newNote.text.headline && !this.newNote.text.body) return
            keepService.addNote(this.newNote)
            eventBus.$emit(EVENT_SHOW_MSG,'Note added','success')
            this.newNote = keepService.emptyNote()

        },
        noteFocused() {
            if (!this.newNote.date) this.newNote.date = Date.now();
            if (this.video) return;
            if (this.image) return;
            if (this.audio) return;
            this.edit = true;
            const body = this.$refs.body;
            setTimeout(() => body.focus(), 0);

        },
        noteBlur() {
            setTimeout(() => {
                if (this.video) return
                if (this.optedit) return
                const body = this.$refs.body;
                const headline = this.$refs.headline
                setTimeout(() => {
                    if (body === document.activeElement || headline === document.activeElement) return;
                    this.edit = false;
                    this.addNote()
                    this.newNote.color = '#ffffff'
                }, 0)
            }, 100)
        },
        uploadVideo() {
            if (!this.video) {
                this.video = true;
                this.videoClass = 'fas fa-cloud-upload-alt'
            } else {
                if (!this.newNote.text.body) {
                    this.videoClass = 'fab fa-youtube';
                    this.video = false;
                } else {
                    this.newNote.type = 'videoCmp'
                    this.newNote.url = this.newNote.text.body
                    // console.log(this.newNote.url);

                    this.newNote.text.body = 'videoCmp'
                    this.addNote(this.newNote)
                    this.video = false;
                    this.videoClass = 'fab fa-youtube';
                }
            }
        },
        uploadImg() {
            console.log('here');

            if (!this.image) {
                this.image = true;
                this.imgClass = 'fas fa-cloud-upload-alt'
            } else {
                if (!this.newNote.text.body) {
                    this.imgClass = 'fas fa-image';
                    this.image = false;
                } else {
                    this.newNote.type = 'imageCmp'
                    this.newNote.url = this.newNote.text.body
                    // console.log(this.newNote.url);
                    this.newNote.text.body = 'imageCmp'
                    this.addNote(this.newNote)
                    this.image = false;
                    this.imgClass = 'fas fa-image';
                }
            }

        },
        uploadAudio() {
            if (!this.audio) {
                this.audio = true;
                this.audioClass = 'fas fa-cloud-upload-alt'
            } else {
                if (!this.newNote.text.body) {
                    this.audioClass = 'fas fa-volume-up';
                    this.audio = false;
                } else {
                    this.newNote.type = 'audioCmp'
                    this.newNote.url = this.newNote.text.body
                    console.log(this.newNote.url);
                    this.newNote.text.body = 'audioCmp'
                    this.addNote(this.newNote)
                    this.audio = false;
                    this.audioClass = 'fas fa-volume-up';
                }
            }

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
        },
        changeColor() {
            var input = event.target.value
            // console.log(input);
            updateColor(input, this.newNote)
        }
    },
    components: {
        opBtns,
        updateNote
    }
}