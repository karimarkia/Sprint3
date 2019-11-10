export default {
    props: ['note', 'color'],
    template: `   
        <div class="btns">
            <i class="fas fa-trash"  @click.stop="$emit('deleteNote')"></i>
            <i class="fas fa-map-pin" v-if="!note.order" @click.stop="$emit('addPin')"></i>
            <i class="fas fa-clone" @click="$emit('copyNote')"></i>
            <router-link v-if="this.note.type === 'textComp'" :to="{name: 'compose', params: { subject: note.text.headline, body: note.text.body }}"><i class="fas fa-envelope" ></i></router-link>
            
            <input class="color-input" :value="color"  type="color" @change="$emit('changeColor')"/>
        </div>
`,
}