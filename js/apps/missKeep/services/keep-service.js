import utilService from '../../../services/util-service.js'
const STORAGE_KEY = 'KeepApp'



export default {
    getNotes,
    emptyNote,
    addNote,
    emptyTodo
}

var gNotes = [{
        id: utilService.makeId(),
        date: utilService.getCurrentTime(),
        type: 'textComp',
        text: {
            headline: 'learn Vue',
            body: 'next weekEnd',
        },
        color: '#ffffff',
        order: 0
    },
    {
        id: utilService.makeId(),
        date: utilService.getCurrentTime(),
        type: 'textComp',
        text: {
            headline: 'going to meetUp in tel aviv ',
            body: 'on sunday at 18:00',
        },
        color: '#ffffff',
        order: -1
    },
    {
        id: utilService.makeId(),
        date: utilService.getCurrentTime(),
        type: 'textComp',
        text: {
            headline: 'shopping',
            body: 'on rami levi',
        },
        color: '#ff0000',
        order: 0
    },
    {
        id: utilService.makeId(),
        date: utilService.getCurrentTime(),
        type: 'textComp',
        text: {
            headline: 'buy a new car ',
            body: 'asdasd',
        },
        color: '#ff5555',
        order: 0
    },
    // {
    //     id: utilService.makeId(),
    //     date: utilService.getCurrentTime(),
    //     type: 'todo',
    //     data: {
    //         headline: 'shpping list',
    //         todos: [{
    //                 num: 1,
    //                 done: false,
    //                 text: 'but some beer'
    //             },
    //             {
    //                 num: 2,
    //                 done: true,
    //                 text: 'i dont know'
    //             },

    //         ]
    //     },
    //     color: '#ff5555',
    //     order: -1,
    //     numOfTodos: 2
    // }

]

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
    gNotes.unshift(note)
    console.log('the updated gNotes now looks like this: ', gNotes)
    utilService.saveToStorage(STORAGE_KEY, gNotes);
}



function getNotes() {
    var notes = utilService.loadFromLocalStorage(STORAGE_KEY)


    if (!notes || notes.length === 0) {
        console.log('the notes service got here')
        notes = gNotes
        utilService.saveToStorage(STORAGE_KEY, gNotes)
    }
    // utilService.saveToStorage(STORAGE_KEY, gNotes);
    return Promise.resolve(gNotes);

}



export function deleteNote(noteid) {
    const noteToDelet = getNoteIdx(noteid)
    gNotes.splice(noteToDelet, 1)
    utilService.saveToStorage(STORAGE_KEY, gNotes);
}

export function copyNote(note) {
    // console.log(noteid);
    gNotes.unshift(note)
    utilService.saveToStorage(STORAGE_KEY, gNotes);
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