import utilService from '../../../services/util-service.js'
const STORAGE_KEY = 'KeepApp'



export default {
    getNotes,
    // createNotes,
    emptyNote,
    // saveTodo
    addNote
}

var gNotes = [{}]
    // var gNextId = 1

// function createNotes() {
//    var notes = [createNote('first text'),
//         createNote('ssasa text'),
//         createNote('fidcxcascrst text')
//     ]
//     gNotes = notes
//     console.log(gNotes);


// }

// function createNote(txt) {
//     return {
//         id: gNextId++,
//         txt,
//     }
// }

// function getNotes() {
//     return Promise.resolve(gNotes)
// }

// window.note=createNotes()



function emptyNote() {
    return {
        id: utilService.makeId(),
        date: utilService.getCurrentTime(),
        type: 'textComp',
        text: {
            headline: '',
            body: ''
        },
        tags: null,
        color: '#ffffff',
        reminder: null,
        order: false
    }
}

function addNote(note) {
    console.log(note);
    console.log(gNotes);

    gNotes.unshift(note)

    utilService.saveToStorage(STORAGE_KEY, note);
}



function getNotes() {
    // var note = utilService.loadFromLocalStorage(STORAGE_KEY)
    // if (!note || note.length === 0) {
    //     note = gNotes
    //     utilService.saveToStorage(STORAGE_KEY, note)
    // }

    return Promise.resolve(gNotes);

}



export function deleteNote(noteid) {
    const noteToDelet = getNoteIdx(noteid)
    gNotes.splice(noteToDelet, 1)
    saveToStorage(STORAGE_KEY, gNotes);
}

function getNoteIdx(noteid) {
    return gNotes.findIndex(note => {
        return note.id === noteid
    });
}