

export default {
    name: 'textComp',
    props: ['note'],
    template: `
    <div :style="{ display: displayCard}">
        <div class="note-card" :style="{ background: note.color}" >
            <div >
                <h2>{{note.text.headline}}</h2>
                <i class="fas fa-map-pin" ></i>
            </div>
               <p>{{note.text.body}}</p>
            
        </div>
    


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
      
    },
  
  
}
