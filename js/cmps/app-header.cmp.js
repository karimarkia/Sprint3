'use strict'

export default {
    name: 'appHeader',
    template: `
        <section>
            <div class="header flex spread">
            <img class="logo" src="img/logo.png" alt="">
                <ul ref="navbar" class="nav-bar flex wrap clean show-hide">
                    <li class="menu-item flex center-center"><router-link to="/"><img class="menu-item" @click="toggleMenu('.nav-bar')" src="img/home.png"></router-link></li>
                    <li class="menu-item flex center-center"><router-link to="/missEmail/emailList"><img class="menu-item" @click="toggleMenu('.nav-bar')" src="img/emailApp.png"></router-link></li>
                    <li class="menu-item flex center-center"><router-link to="/missKeep"><img class="menu-item" @click="toggleMenu('.nav-bar')" src="img/keepApp.png"></router-link></li>
                    <li class="menu-item flex center-center"><router-link to="/missBooks"><img class="menu-item" @click="toggleMenu('.nav-bar')" src="img/booksApp.png"></router-link></li>
                </ul>
                <div class="header flex spread">
                    
                    <div><img class="hamburger" @click="toggleMenu('.nav-bar')" src="img/hamburger.png"></div>
                </div>           
            </div>
        </section> 
    `,
    methods: {
        toggleMenu(menu) {
            let elMenu = this.$refs.navbar;
            elMenu.classList.toggle('show-hide');
        }
    },
}