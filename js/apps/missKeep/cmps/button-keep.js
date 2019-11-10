export default {
    props: ['newNote', 'color'],
    template: `   
        <div class="opt-btns" @click.stop=''>
            <button  @click="$emit('addNote')">save note</button>
            <input type="color" class="color-input" :value="color" @change="$emit('changeColor')" ref="color" @focus="$emit('colorFocus')"  @blur="$emit('colorblur')"/>
            <i class="fas fa-map-pin" @click="$emit('pinNote')" :style="{ color: pinColor}"></i>
        </div>
`,
    computed: {
        pinColor() {
            if (this.newNote.order) return 'red'
            return 'black'
        }
    }
}   