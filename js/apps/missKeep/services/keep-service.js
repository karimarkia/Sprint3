import utilService from '../../../services/util-service.js'
const STORAGE_KEY = 'KeepApp'



export default {
    getNotes,
    emptyNote,
    addNote,
    emptyTodo
}

var gNotes = [
    {
        "id": utilService.makeId(),
        'date': utilService.getCurrentTime(),
        'type': 'textComp',
        text: {
            headline: 'asdasd',
            "body": 'asdasd',
        },
        'color': null,
        order: 0
    }

]
// var gNotes = utilService.loadFromLocalStorage(STORAGE_KEY)



// window.note = gNotes



function emptyNote() {
    return {
        id: utilService.makeId(),
        date: utilService.getCurrentTime(),
        type: 'textComp',
        text: {
            headline: '',
            body: '',
        },
        color: null,
        order: false
    }
}

function addNote(note) {
    utilService.saveToStorage(STORAGE_KEY, note);
    gNotes.unshift(note)
}



function getNotes() {
    var note = utilService.loadFromLocalStorage(STORAGE_KEY)
    console.log(note);
    
    if (!note || note.length === 0) {
        note=gNotes
        utilService.saveToStorage(STORAGE_KEY, note)
    }
    // utilService.saveToStorage(STORAGE_KEY, gNotes);
    return Promise.resolve(gNotes);

}



export function deleteNote(noteid) {
    const noteToDelet = getNoteIdx(noteid)
    gNotes.splice(noteToDelet, 1)
    utilService.saveToStorage(STORAGE_KEY, noteid);
}

export function copyNote(noteid) {
    // console.log(noteid);
    gNotes.unshift(noteid)
    utilService.saveToStorage(STORAGE_KEY, noteid);
}

function getNoteIdx(noteid) {
    return gNotes.findIndex(note => {
        return note.id === noteid
    });
}

export function updateColor(val, note) {
    note.color = val;
    utilService.saveToStorage(STORAGE_KEY, gNotes);
}

export function removePin(note) {
    note.order = false;
    utilService.saveToStorage(STORAGE_KEY, gNotes);
}

export function addPin(note) {
    note.order = true;
    utilService.saveToStorage(STORAGE_KEY, gNotes);
}

export function updateNote(note, body, headline) {
    note.text.body = body;
    note.text.headline = headline
    utilService.saveToStorage(STORAGE_KEY, gNotes);
}
export function updateTodo(note, body, headline) {
    note.data.headline = body;
    note.data.todo.text = headline
    utilService.saveToStorage(STORAGE_KEY, gNotes);
}

export function updateTodoItem(note, i) {
    note.data.todos[i].done = !note.data.todos[i].done;
    utilService.saveToStorage(STORAGE_KEY, gNotes);
}

function emptyTodo() {
    return {
        id: utilService.makeId(),
        date: utilService.getCurrentTime(),
        type: 'todo',
        data: {
            headline: '',
            todos: [{
                num: 1,
                done: false,
                text: ''
            }, ]
        },
        color: null,
        order: false,
        numOfTodos: 1
    }

}