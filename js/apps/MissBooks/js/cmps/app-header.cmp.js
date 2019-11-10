'use strict'

export default {
    name: 'appHeader',
    template: `
        <div>
            <h1>THIS IS THE HEADER</h1>
            <nav>
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About Me</router-link> |
                <router-link to="/book" exact>Ms. Books</router-link> |
                <router-link to="/addBook">Add Books</router-link>
            </nav>
        </div>
    `
}