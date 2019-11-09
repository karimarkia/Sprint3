// import bookService from '../../services/book-service.js'
import convertChar from '../cmps/convert-char-cmp.js'
import { eventBus, EVENT_SHOW_MSG }from '../service/event-bus.service.js'



export default {
    props: ['','feedbacks'],
    template: ` 
    <section class="review-list">  
    <div>
    <h1 v-if="feedbacks">Book reviews</h1>
    <ul class="clean-list"  
    v-for = "(feedback,idx) in feedbacks">
        <li class="reviews-item" >
            <button class="back-btn fa fa-times" @click="deleteFeedback(idx)"></button>
            <h5>Writer: {{feedback.userName}}</h5>
            <p>Date of read: {{feedback.dateRead}}</p>
            <p> Stars</p>
            <convert-char :value="feedback.selectedStar">
            </convert-char>
            <p>Comments: {{feedback.txt}}</p>
        </li>

    </ul>
</div>
    </section>
    `
    ,
    // data() {
    //     return {
    //         // bookId: this.bookSelectedId,
    //     }
    // },
    methods: {
        deleteFeedback(idx) {
            console.log(idx);
            
            this.$emit('deleteFeedback', idx);
            eventBus.$emit(EVENT_SHOW_MSG,'review Deleted','error')
        }
    },
  
    
    components:{
        convertChar
    }
}



