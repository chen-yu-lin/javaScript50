const container = document.querySelector('.container')
const split = document.querySelectorAll('.split')

split.forEach(div => div.addEventListener('mouseover', hover))
split.forEach(div => div.addEventListener('mouseout',out))

function hover() {
    const className = this.className.split(' ')[1]
    container.classList.add(`hover-${className}`)
}

function out() {
    const className = this.className.split(' ')[1]
    container.classList.remove(`hover-${className}`)
}
