'use strict'

document.addEventListener('DOMContentLoaded', function() {


    //modal


    function modal(btnSelector, boxSelector, closeSelector, active) {
        const btn = document.querySelector(btnSelector)
        const box = document.querySelector(boxSelector)
        const close = document.querySelector(closeSelector)

        btn.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault()
            }
            box.classList.add(active)
            document.body.style.overflow = 'hidden'
        })

        close.addEventListener('click', () => {
            box.classList.remove(active)
            document.body.style.overflow = ''
        })

        box.addEventListener('click', (e) => {
            if (e.target && e.target === box) {
                box.classList.remove(active)
                document.body.style.overflow = ''
            }
        })

        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape' && box.classList.contains(active)) {
                box.classList.remove(active)
                document.body.style.overflow = ''
            }
        })
    }

    modal('#link', '.sources', '.close', 'active')




    //animation and more




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