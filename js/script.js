'use strict'

document.addEventListener('DOMContentLoaded', function() {




    const box = document.querySelector('.sources')
    const btn = document.querySelector('#link')
    const close = document.querySelector('.close')

    function delActive() {
        box.classList.remove('active')
        document.body.style.overflow = ''
    }

    function active() {
        box.classList.add('active')
        document.body.style.overflow = 'hidden'
    }

    btn.addEventListener('click', function(e) {
        e.preventDefault()
        active()
    })

    close.addEventListener('click', function() {
        delActive()
    })


    box.addEventListener('click', function(e) {
        if (e.target.classList.contains('sources')) {
            delActive()
        }
    })

    document.addEventListener('keydown', function(e) {
        if (e.code === 'Escape' && box.classList.contains('active')) {
            delActive()
        }
    })



    ScrollReveal().reveal('.main__title', {duration: 1000, delay: 600, origin: 'top', distance: '30px', afterReveal: function() {
        new TypeIt("#schewz", {
            speed: 45,
            strings: "Краткий экскурс и достопримечательности этой замечатльной страны"
        }).go();
    }});
    ScrollReveal().reveal('.main__ul', {duration: 1500, delay: 100, origin: 'top', distance: '30px'});
    ScrollReveal().reveal('.country__descr', {duration: 1500, delay: 300, origin: 'top', distance: '30px'});
    let i  = 0
    document.querySelectorAll('.country-block').forEach((item) => {
        ScrollReveal().reveal(item, {duration: 1500, delay: 200 + i, origin: 'top', distance: '30px'});
        i = i + 500
    })
    document.querySelectorAll('.beautify-block').forEach((item) => {
        ScrollReveal().reveal(item, {duration: 2000, delay: 200, origin: 'top', distance: '30px'});
    })
    ScrollReveal().reveal('.beautify-block_reverse', {duration: 2000, delay: 200, origin: 'top', distance: '30px'});


})