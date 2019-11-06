'use strict'

export function sendQuery(str) {
    let queryRes = axios.get(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${str}`);
    return queryRes.then(res => {
        console.log('got results from Google!');
        return res;
    })
}