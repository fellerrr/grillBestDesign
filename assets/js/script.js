'use strict';

/** 
* Preload
*
* loading will be end after document is loaded
*/ 

const preloader = document.querySelector('[data-preaload]')

window.addEventListener('load',function(){
    preloader.classList.add('loaded')
    document.body.classList.add('loaded')
})

/** 
* add eventListener on multiple Elements
*/ 

const addEventOnElements = function(elements, eventType,callback) {
    for(let i=0, len=elements.length; i < len; i++) {
        elements[i].addEventListener(eventType,callback)
    }
}

/** 
* Navbar
*/

const navbar = document.querySelector('[data-navbar]');
const navTogglers = document.querySelectorAll('[data-nav-toggler]')
const overlay = document.querySelector('[data-overlay]');

const toggleNavbar = function(){
    navbar.classList.toggle('active')
    overlay.classList.toggle('active')
    document.body.classList.toggle('nav-active')
}

addEventOnElements(navTogglers,'click', toggleNavbar)

/** 
* Header
*/

const header = document.querySelector('[data-header]')

let lastScrollPos = 0

const hideHeader = function(){
    const isScrollBottom = lastScrollPos < window.scrollY
    isScrollBottom
    ? header.classList.add('hide')
    : header.classList.remove('hide')

    lastScrollPos = window.scrollY

}

window.addEventListener('scroll',function(){
    if(window.scrollY >= 50){
        header.classList.add('active')
        hideHeader()
    }
    else{
        header.classList.remove('active')
    }
    
    
})