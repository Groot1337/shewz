'use strict'

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