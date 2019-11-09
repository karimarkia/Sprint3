export default {
    props: ['note', 'color'],
    template: `   
        <div class="btns">
            <i class="fas fa-trash"  @click.stop="$emit('deleteNote')"></i>
            <i class="fas fa-map-pin" v-if="!note.order" @click.stop="$emit('addPin')"></i>
            <i class="fas fa-clone" @click="$emit('copyNote')"></i>
            <i class="fas fa-envelope" @click="$emit('sendToMail', note)"></i>
            <input class="color-input" :value="color"  type="color" @change="$emit('changeColor')"/>
        </div>
`
}