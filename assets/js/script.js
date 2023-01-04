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
    
/// close sideBar on click link


const mobMenu = document.querySelectorAll('[data-mobMenu]')

const toggleMobNavbar = () => {
    if (navbar.classList.contains('active')){
        navbar.classList.toggle('active')
        overlay.classList.toggle('active')
        document.body.classList.toggle('nav-active')
    }
   
}

addEventOnElements(mobMenu,'click', toggleMobNavbar)


/** 
* Header & back-top-btn
*/

const header = document.querySelector('[data-header]')
const backTopBtn = document.querySelector('[data-back-top-btn]')

let lastScrollPos = 0

const hideHeader = function() {
    const isScrollBottom = lastScrollPos < window.scrollY
    isScrollBottom
    ? header.classList.add('hide') 
    : header.classList.remove('hide')

    lastScrollPos = window.scrollY
}

window.addEventListener('scroll',function(){
    if(window.scrollY >= 50){
        header.classList.add('active')
        backTopBtn.classList.add('active')
        hideHeader()
    }
    else{
        header.classList.remove('active')
        backTopBtn.classList.remove('active')
    }
    
    //topar-header

    const topbar = document.querySelector('.topbar')
    header.classList.contains('active') ? topbar.classList.add("topbar-hide") : topbar.classList.remove("topbar-hide")
        
})



/** 
* Hero Slider
*/


const heroSlider = document.querySelector('[data-hero-slider]')
const heroSliderItems = document.querySelectorAll('[data-hero-slider-item]')
const heroSliderPrevBtn = document.querySelector('[data-prev-btn]')
const heroSliderNextBtn = document.querySelector('[data-next-btn]')

let currentSlidePos = 0
let lastAciveSlideritem = heroSliderItems[0]

const updateSliderPos = function() {
    lastAciveSlideritem.classList.remove('active')
    heroSliderItems[currentSlidePos].classList.add('active')
    lastAciveSlideritem = heroSliderItems[currentSlidePos]
}

const slideNext = function() {

    if (currentSlidePos >= heroSliderItems.length-1 ){
        currentSlidePos = 0
    }
    else{
        
        currentSlidePos++
    }

    updateSliderPos()
}

heroSliderNextBtn.addEventListener('click', slideNext)

const slidePrev = function() {

    if (currentSlidePos <= 0 ){
        currentSlidePos = heroSliderItems.length-1
    }
    else{currentSlidePos--}

    updateSliderPos()
}

heroSliderPrevBtn.addEventListener('click', slidePrev)


/** 
* Auto Slide
*/

let autoSlideInterval;

const autoSlide = function(){
    autoSlideInterval = setInterval(function(){
        slideNext()
    },7000)
}

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], 'mouseover', function(){
    clearInterval(autoSlideInterval);
})

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], 'mouseout', autoSlide)

window.addEventListener('load', autoSlide)


/** 
* Paralaxeffect
*/

const parallaxItems = document.querySelectorAll('[data-parallax-item]')

let x, y;

window.addEventListener('mousemove', function(event){
    x = (event.clientX / window.innerWidth * 10)-5
    y = (event.clientY / window.innerHeight * 10)-5

    x = -x
    y = -y

    for(let i=0, len=parallaxItems.length; i < len; i++) {
        x *=  Number(parallaxItems[i].dataset.parallaxSpeed)
        y *=  Number(parallaxItems[i].dataset.parallaxSpeed)
        parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`
    }
})
