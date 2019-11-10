'use strict'

export default {
    loadFromLocalStorage,
    saveToStorage,
    makeId,
    getCurrentTime,
    setSort

}

function loadFromLocalStorage(key) {
    console.log('got here from the KEEP app');

    const json = localStorage.getItem(key);
    const value = JSON.parse(json)
    console.log('this is what i found in the LS: ', value);
    return value;
}

function saveToStorage(key, value) {
    const json = JSON.stringify(value);
    localStorage.setItem(key, json)
}

function makeId(length = 3) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}


function getCurrentTime() {
    const date = new Date();

    const time = {
        year: date.getFullYear(),
        month: date.getMonth(),
        dateDay: date.getDate(),
        hour: date.getHours(),
        min: date.getMinutes(),
        sec: date.getSeconds(),
    }
    const weekDay = date.getDay()
    const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        // time.min = (min < 10 ? "0" : "") + min;
    for (var i = 0; i <= 6; i++) {
        if (weekDay === i) {
            time.weekDay = daysOfTheWeek[i]
        }
    }
    return time;
}

function setSort(array, key) {
    return array.sort(function(a, b) {
        var x = a[key];
        var y = b[key];
        return ((x.toLowerCase() < y.toLowerCase()) ? -1 : 1);
    });
}