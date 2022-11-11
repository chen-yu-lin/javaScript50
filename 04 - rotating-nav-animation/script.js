const close = document.getElementById('close')
const open = document.getElementById('open')
const box = document.querySelector('.box')

open.onclick = function() {
    box.classList.add('show')
}

close.onclick = function() {
    box.classList.remove('show')
}